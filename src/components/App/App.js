import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import Table from '../table/Table';
import AddForm from '../addForm/AddForm';
import AppGame from '../appGame/AppGame';
import AppFooter from '../appFooter/AppFooter';
import library from '../../resources/data/words.json';

import './app.scss';

function App() {

    const [words, setWords] = useState(library);

    const deleteItem = (id) => {
        setWords(words.filter(word => word.id !== id));
    }

    const addItem = (english, transcription, russian, tags, id) => {

        const newWord = {
            english,
            transcription,
            russian,
            tags,
            id
        }

        const newArr = [...words, newWord];
        setWords(newArr);
    }

    const saveItem = (id) => {
        console.log(`save me! ${id}`)
    }

    return (
        <div className="app">
            <AppHeader/>
            <main className="main">
                <div className="app__home">
                    <Table
                        words={words}
                        onDelete={deleteItem}
                        onSave={saveItem}
                        />
                    <AddForm onAdd={addItem}/>
                </div>
                <AppGame
                    words={words}/>
            </main>
            <AppFooter/>
        </div>
    );
}

export default App;