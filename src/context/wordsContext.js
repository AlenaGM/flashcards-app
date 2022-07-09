import { createContext } from 'react';

const WordsContext = createContext({
        "id": "111",
        "english": "butterflyTEST",
        "transcription": "[ ˈkærət ]",
        "russian": "морковь",
        "tags": "овощи"
});

export default WordsContext;