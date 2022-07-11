import {useState, useEffect, useContext} from "react";
import { WordsContext } from "../../context/wordsContext";

import Row from '../row/Row';

import './table.scss';

const Table = () => {

    const {words, deleteWords} = useContext(WordsContext);
    const [wordList, setWordList] = useState(words);

    useEffect(() => {
        setWordList(words);
        }, [words]);

        const onDelete = (id) => {
        deleteWords(id);
    };

    const elements = wordList.map(word => (
        <Row
            key={word.id}
            {...word}
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
                    <th>Здесь будет количество строк на странице и пагинация</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;

