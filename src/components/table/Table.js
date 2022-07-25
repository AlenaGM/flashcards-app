import {useState, useContext} from "react";

import { WordsContext } from "../../context/wordsContext";
import { SelectContext } from "../../context/selectContext";

import classnames from 'classnames';

import Row from '../row/Row';
import Select from "../select/Select";
import Pagination from "../pagination/Pagination";
import Modal from "../modal/Modal";

import './table.scss';


const Table = () => {

    const {words, deleteWords} = useContext(WordsContext);
    const [wordList] = useState(words);
    const {term} = useContext(SelectContext);

    const {currentPage, setCurrentPage} = useContext(WordsContext);
    const [wordsPerPage] = useState(7);

    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;

    const onDelete = (id) => {
        deleteWords(id);
    }

    const elements = wordList.map(word => (
        <Row
            key={word.id}
            {...word}
            onDelete={onDelete}/>
        ))

    //****НОВЫЙ КОД:НАЧАЛО****
    //Фильтруем
    const filteredElements = term ==='' ? elements : elements.filter(element => element.props.tags === term);
    //Разбиваем на страницы
    const currentWords = filteredElements.slice(indexOfFirstWord, indexOfLastWord);
    //****НОВЫЙ КОД:КОНЕЦ****

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [selectVisible, setSelectVisible] = useState(false);

    const openSelectIconClasses = classnames({
        'showSelectIcon': true,
        'fas fa-caret-down': !selectVisible,
        'fas fa-caret-up': selectVisible
    });

    return (
        <>
        <table className="app__table table">
            <thead>
                <tr className="table__row">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th className='collection'>Collection <i className={openSelectIconClasses} onClick={()=>setSelectVisible(!selectVisible)}></i>{selectVisible && <Select/>}</th>
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
        <Modal/>
        </>
    )
}

export default Table;






