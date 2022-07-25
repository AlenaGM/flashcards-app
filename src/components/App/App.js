import {BrowserRouter, Routes, Route} from "react-router-dom";

import {HomePage, GamePage, Page404} from '../pages';

import Modal from "../modal/Modal";

import WordsContextProvider from '../../context/wordsContext';
import SelectContextProvider from "../../context/selectContext";
import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';

import './App.scss';


function App() {

    return (
        <WordsContextProvider>
            <SelectContextProvider>
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
                        <Modal/>
                        <AppFooter/>
                    </div>
                </BrowserRouter>
            </SelectContextProvider>
        </WordsContextProvider>
    );
}

export default App;


