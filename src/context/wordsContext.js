import { useState, useEffect, createContext } from 'react';

export const WordsContext = createContext();

function WordsContextProvider(props) {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
      getWords();
    }, []);

    const getWords = () => {
      setLoading(true);
      fetch('https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words')
        .then((response) => response.json())
        .then((response) => {
          setWords(response);
        })
        .catch((errors) => setError(errors))
        .finally(() => {
          setLoading(false);
        });
    };

    const editWords = (word) => {
      fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(word), // данные могут быть 'строкой' или {объектом}!
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    const deleteWords = (id) => {
      fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: 'POST', // или 'PUT'
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    return (
    <WordsContext.Provider value={{words, loading, error, editWords, deleteWords}}>
        {props.children}
    </WordsContext.Provider>
    );
}

export default WordsContextProvider;

