import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

import {HomePage, GamePage, Page404} from '../pages';
import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import WordsContext from "../../context/wordsContext";

import './App.scss';

const { Provider} = WordsContext;


function App() {

    const [words, setWords] = useState ({
        "id": "111",
        "english": "catTEST",
        "transcription": "[ ˈkærət ]",
        "russian": "морковь",
        "tags": "овощи"
    })

    return (
        <Provider value={words}>
            <BrowserRouter>
                <div className="app">
                    <AppHeader/>
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/game" element={<GamePage/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;


