import { useState, useContext } from "react";
import { WordsContext } from "../../context/wordsContext";
import { SelectContext } from "../../context/selectContext";

const Select = () => {

    const {words} = useContext(WordsContext);
    const [wordList] = useState(words);

    const {setTerm} = useContext(SelectContext);

    const tags = wordList.map(word => (
        word.tags
    ))

    const uniqueTags = [...new Set(tags)].filter(element => element !== "");

    const options = uniqueTags.map(tag => (
        <option value={tag} key={tag}>{tag}</option>
    ))

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
    }

    return (
        <select className="select" onChange={onUpdateSearch}>
            <option value="all" key="all" className="selectTitle">все коллекции</option>
            {options}
        </select>
    )
}

export default Select;