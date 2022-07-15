import {useState, useEffect, useContext} from "react";
import { WordsContext } from "../../context/wordsContext";
import Pagination from "../pagination/Pagination";

import Row from '../row/Row';

import './table.scss';

const Table = () => {

    const {words, deleteWords} = useContext(WordsContext);
    const [wordList, setWordList] = useState(words);

    const [currentPage, setCurrentPage] = useState(1);
    const [wordsPerPage] = useState(7);

    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;
    const currentWords = wordList.slice(indexOfFirstWord, indexOfLastWord);

    useEffect(() => {
        setWordList(words);
        }, [words]);

    const onDelete = (id) => {
        deleteWords(id);
    };

    const elements = currentWords.map(word => (
        <Row
            key={word.id}
            {...word}
            onDelete={onDelete}/>
        ))

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                        <Pagination
                            wordsPerPage={wordsPerPage}
                            totalWords={wordList.length}
                            currentPage={currentPage}
                            paginate={paginate}/>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;

