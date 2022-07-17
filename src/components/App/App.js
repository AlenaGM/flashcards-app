import {BrowserRouter, Routes, Route} from "react-router-dom";
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';

import {HomePage, GamePage, Page404} from '../pages';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';

import './App.scss';


function App({ wordStore }) {

    useEffect(() => {
        wordStore.loadData();
    }, []);

    return (
        <>
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
        </>
    );
}

export default inject(['wordStore'])(observer(App));



