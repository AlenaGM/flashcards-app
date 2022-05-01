import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';


const Table = () => {
    return (
        <>
            <table className="app__table table">
                <tr className="table__row">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Collection</th>
                    <th>Edit</th>
                    <th>Del</th>
                </tr>
            {
                words.map((word) =>
                <tr className="table__row">
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
        </>
    )
}

export default Table;
