
import { useState, useEffect, createContext } from 'react';

const WordsContext = createContext();

function WordsContextProvider(props) {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
      getWords();
    }, []);

    const getWords = () => {
      setLoading(true);
      fetch('itgirlschool/api/words')
        .then((response) => response.json())
        .then((response) => {
          setWords(response.results);
        })
        .catch((errors) => setError(errors))
        .finally(() => {
          setLoading(false);
        });
    };

    return (
    <WordsContext.Provider
        value={{words, loading, error}}
    >
        {props.children}
    </WordsContext.Provider>
    );


}

export {WordsContextProvider, WordsContext} ;

