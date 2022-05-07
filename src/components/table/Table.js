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
                </tbody>
            </table>
        </>
    )
}

export default Table;

