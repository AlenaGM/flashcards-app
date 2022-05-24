import {BrowserRouter, Routes, Route} from "react-router-dom";

import {HomePage, GamePage, Page404} from '../pages';
import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';


import './app.scss';


function App() {

    return (
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
    );
}

export default App;


