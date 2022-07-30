import {BrowserRouter, Routes, Route} from "react-router-dom";

import WordsContextProvider from '../../context/WordsContext';
import {HomePage, GamePage, Page404} from '../pages';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';

import './App.scss';


function App() {

    return (
        <WordsContextProvider>
            <BrowserRouter>
                <div className="app">
                    <AppHeader/>
                    <main className="main">
                        <Routes>
                            <Route path="/flashcards-app/" element={<HomePage/>}/>
                            <Route path="/flashcards-app/game" element={<GamePage/>}/>
                            <Route path="/flashcards-app/*" element={<Page404/>}/>
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </BrowserRouter>
        </WordsContextProvider>
    );
}

export default App;


