import { useState, useContext } from "react";
import { WordsContext } from "../../context/WordsContext";


const Select = () => {

    const {words} = useContext(WordsContext);
    const [wordList] = useState(words);

    const {term,setTerm} = useContext(WordsContext);
    const {setCurrentPage} = useContext(WordsContext);

    const tags = wordList.map(word => (
        word.tags
    ))

    const uniqueTags = [...new Set(tags)].filter(element => element !== "" && element !== term).sort();

    const options = uniqueTags.map(tag => (
        <option value={tag} key={tag}>{tag}</option>
    ));

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
        setCurrentPage('1');
    }

    return (
        <select className='select' onChange={onUpdateSearch}>
            {term && <option value={term}>{term}</option>}
            <option value="" key="">все коллекции</option>
            {options}
        </select>
    )
}

export default Select;