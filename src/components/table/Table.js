import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';

const Table = () => {
    return (
        <>
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
                {
                    words.map((word) =>
                        <tr className="table__row" key={word.id}>
                            <Row {...word}/>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr className="table__row">
                        <th>Здесь будет количество строк на странице и пагинация</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Table;

