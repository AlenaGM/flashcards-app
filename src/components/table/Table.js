import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';

const style={backgroundColor: 'red'}

const Table = (props) => {
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
                <>
                {word.isEdit ?
                <tr className="table__row row_edit">
                        <Row
                            id={word.id}
                            english={word.english}
                            transcription={word.transcription}
                            russian={word.russian}
                            tags={word.tags}
                            isEdit={word.isEdit}/>
                    </tr>
                    :
                    <tr className="table__row">
                        <Row
                            id={word.id}
                            english={word.english}
                            transcription={word.transcription}
                            russian={word.russian}
                            tags={word.tags}
                            isEdit={word.isEdit}/>
                    </tr>
                }
                </>
                )
            }
            <tr className="table__row">Здесь будет количество строк на странице и пагинация</tr>
            </table>
        </>
    )
}

export default Table;

