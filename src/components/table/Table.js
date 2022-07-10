import {useState, useEffect, useContext} from "react";
import Row from '../row/Row';
import { WordsContext } from "../../context/wordsContext";
import './table.scss';

const Table = () => {

    const { words, deleteWords } = useContext(WordsContext);
    const [wordCollection, setwordCollection] = useState(words);

    useEffect(() => {
        setwordCollection(words);
        }, [words]);

        const onDelete = (id) => {
        deleteWords(id);
    };

    //const elements = words.map(word => {
    //const {id, ...wordProps} = word;

    //return (
    //    <Row
    //        key={id}
    //        id={id}
    //        {...wordProps}
    //        />
    //    )
    //})

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
                {wordCollection.map((word, index) => (
                    <Row index={index} key={word.id} {...word} onDelete={onDelete}></Row>
                    ))}
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

