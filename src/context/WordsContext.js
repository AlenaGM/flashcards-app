import { useState, useEffect, createContext } from 'react';


export const WordsContext = createContext();

function WordsContextProvider(props) {

  const url = 'https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words';

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [term, setTerm] = useState('');

    useEffect(() => {
      getWords();
    }, []);

    //"https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words"

    const getWords = () => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setWords(response);
        })
        .catch((errors) => setError(errors))
        .finally(() => {
          setLoading(false);
        });
    };

    //`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`

    const editWords = (word) => {
      fetch(`${url}/${word.id}/update`, {
        method: 'POST',
        body: JSON.stringify(word),
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    //`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/delete`

    const deleteWords = (id) => {
      fetch(`${url}/${id}/delete`, {
        method: 'POST',
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    //`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/add

    const addWords = (word) => {
      fetch(`${url}/add`, {
        method: 'POST',
        body: JSON.stringify(word),
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    return (
    <WordsContext.Provider
      value={{words,
              loading,
              errors,
              currentPage,
              term,
              editWords,
              deleteWords,
              addWords,
              setCurrentPage,
              setTerm
            }}>
        {props.children}
    </WordsContext.Provider>
    );
}

export default WordsContextProvider;

