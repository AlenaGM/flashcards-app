import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';


const Table = () => {
    return (
        <div className="app__table">
            <table className="table">
                <caption>Word List</caption>
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Collection</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            {
                words.map((word) =>
                <tr>
                    <Row
                        id={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tags={word.tags}/>
                </tr>
                )
            }
            </table>
        </div>
    )
}

export default Table;
