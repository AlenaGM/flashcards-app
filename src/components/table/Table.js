import {useState, useContext} from "react";

import { WordsContext } from "../../context/wordsContext";
import { SelectContext } from "../../context/selectContext";

import Row from '../row/Row';
import Select from "../select/Select";
import Pagination from "../pagination/Pagination";

import './table.scss';


const Table = () => {

    const {words, deleteWords} = useContext(WordsContext);
    const [wordList] = useState(words);
    const {term} = useContext(SelectContext);

    const {currentPage, setCurrentPage} = useContext(WordsContext);
    const [wordsPerPage] = useState(4);

    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;
//    const currentWords = wordList.slice(indexOfFirstWord, indexOfLastWord);

    const onDelete = (id) => {
        deleteWords(id);
    };

    const elements = wordList.map(word => (
        <Row
            key={word.id}
            {...word}
            onDelete={onDelete}/>
        ))

    //НОВЫЙ КОД:НАЧАЛО
    //Фильтруем
    const filteredElements = term ==='all' ? elements : elements.filter(element => element.props.tags === term);
    //Разбиваем на страницы
    const currentWords = filteredElements.slice(indexOfFirstWord, indexOfLastWord);
    //НОВЫЙ КОД:КОНЕЦ

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <table className="app__table table">
            <thead>
                <tr className="table__row">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Collection <i className="fas fa-caret-down"></i><Select/></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {currentWords}
            </tbody>
            <tfoot>
                <tr className="table__row">
                    <th>
                        <Pagination
                            wordsPerPage={wordsPerPage}
                            totalWords={filteredElements.length}
                            currentPage={currentPage}
                            paginate={paginate}/>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;






