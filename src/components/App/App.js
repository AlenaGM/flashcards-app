import { HashRouter, Routes, Route} from "react-router-dom";

import WordsContextProvider from '../../context/WordsContext';
import {HomePage, GamePage, Page404} from '../pages';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';

import './App.scss';


function App() {

    return (
        <WordsContextProvider>
            <HashRouter>
                <div className="app">
                    <AppHeader/>
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/game" element={<GamePage/>}/>
                            <Route path="/*" element={<Page404/>}/>
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </HashRouter>
        </WordsContextProvider>
    );
}

export default App;


