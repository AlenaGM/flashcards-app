import { useState, useEffect, createContext } from 'react';


export const WordsContext = createContext();

function WordsContextProvider(props) {

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [term, setTerm] = useState('');

    useEffect(() => {
      getWords();
    }, []);

    const getWords = () => {
      setLoading(true);
      fetch(`itgirlschool/api/words`)
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
      fetch(`itgirlschool/api/words/${word.id}/update`, {
        method: 'POST',
        body: JSON.stringify(word),
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    const deleteWords = (id) => {
      fetch(`itgirlschool/api/words/${id}/delete`, {
        method: 'POST',
      })
        .then(() => {
          getWords();
        })
        .catch((errors) => setError(errors));
    };

    const addWords = (word) => {
      fetch(`itgirlschool/api/words/add`, {
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

