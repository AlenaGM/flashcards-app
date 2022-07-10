import { useState, useContext } from 'react';

import Table from '../table/Table';
import AddForm from '../addForm/AddForm';
//import library from '../../resources/data/words.json';
import { WordsContext } from '../../context/WordsContext';

import '../App/App.scss';


const HomePage = () => {

    const [words, setWords] = useState(WordsContext);
    const context = useContext(WordsContext).words;

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
                words={context}
                onDelete={deleteItem}
                onSave={saveItem}/>
            <AddForm onAdd={addItem}/>
        </div>
    )
}

export default HomePage;