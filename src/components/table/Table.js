import {useState, useContext} from "react";
import classnames from 'classnames';

import { WordsContext } from "../../context/WordsContext";

import Row from '../row/Row';
import Select from "../select/Select";
import Pagination from "../pagination/Pagination";
import useConfirm from "../../hooks/useConfirm";

import './table.scss';


const Table = () => {

    const {confirm} = useConfirm();

    const {words, deleteWords} = useContext(WordsContext);
    const [wordList] = useState(words);

    const {currentPage, setCurrentPage} = useContext(WordsContext);
    const [wordsPerPage] = useState(7);

    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;

    const {term, setTerm} = useContext(WordsContext);
    const [selectVisible, setSelectVisible] = useState(false);

    const showConfirm = async (id) => {
        const isConfirmed = await confirm(`Are you sure you want to delete this word?`);

        if (isConfirmed) {
            deleteWords(id);
            setTerm('');
        } else {
            setTerm('');
        }
    }

    const elements = wordList.map(word => (
        <Row
            key={word.id}
            {...word}
            onDelete={showConfirm}
            />
        ))

    const filteredElements = term ==='' ? elements : elements.filter(element => element.props.tags === term);
    const currentWords = filteredElements.slice(indexOfFirstWord, indexOfLastWord);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openSelectIconClasses = classnames({
        'showSelectIcon': true,
        'fas fa-caret-down': !selectVisible,
        'fas fa-caret-up': selectVisible
    });

    const onCaretClick = () => {
        setSelectVisible(!selectVisible);
    }

    return (
        <table className="app__table table">
            <thead>
                <tr className="table__row">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th className='collection'>Collection
                        <i className={openSelectIconClasses} onClick={onCaretClick}/>
                        {selectVisible && <Select/>}
                    </th>
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






