import { useState, useContext } from "react";
import { WordsContext } from "../../context/wordsContext";
import { SelectContext } from "../../context/selectContext";
import classnames from 'classnames';

const Select = () => {

    const {words} = useContext(WordsContext);
    const [wordList] = useState(words);

    const {setTerm} = useContext(SelectContext);
    const {setCurrentPage} = useContext(WordsContext);
    const [selectVisible] = useState(false);

    const tags = wordList.map(word => (
        word.tags
    ))

    const uniqueTags = [...new Set(tags)].filter(element => element !== "").sort();

    const options = uniqueTags.map(tag => (
        <option value={tag} key={tag}>{tag}</option>
    ))

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
        setCurrentPage('1');
    }

    return (
        <select className='select' onChange={onUpdateSearch}>
            <option value="" key="all" className="selectTitle">все коллекции</option>
            {options}
        </select>
    )
}

export default Select;