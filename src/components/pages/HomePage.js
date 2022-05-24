import { useState } from 'react';

import Table from '../table/Table';
import AddForm from '../addForm/AddForm';
import library from '../../resources/data/words.json';

import '../app/app.scss';


const HomePage = () => {

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
        <div className="app__home">
            <Table
                words={words}
                onDelete={deleteItem}
                onSave={saveItem}/>
            <AddForm onAdd={addItem}/>
        </div>
    )
}

export default HomePage;