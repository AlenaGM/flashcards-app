import {useState} from "react";
import { observer, inject } from 'mobx-react';

import Row from '../row/Row';
import Pagination from "../pagination/Pagination";

import './table.scss';


const Table = ({wordStore, currentPage}) => {

//    const [wordList] = useState({wordStore});

//    const [wordsPerPage] = useState(7);

//    const indexOfLastWord = currentPage * wordsPerPage;
//    const indexOfFirstWord = indexOfLastWord - wordsPerPage;
//    const currentWords = wordStore.words.slice(indexOfFirstWord, indexOfLastWord);

    const onDelete = (id) => {
        wordStore.deleteWords(id);
    };

    const elements = wordStore.words.map(word => (
        <Row
            key={word.id}
            {...word}
            word={word}
            onDelete={onDelete}/>
        ))

    return (
        <table className="app__table table">
            <thead>
                <tr className="table__row">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Collection</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
            <tfoot>
                <tr className="table__row">
                    <th>
                        <Pagination/>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}

export default inject(['wordStore'])(observer(Table));

