import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';

const Table = () => {

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
                {
                    words.map((word) => {
                        const {id, ...wordProps} = word;
                        return (
                            <Row
                                key={id}
                                id={id}
                                {...wordProps}
                                onDelete={()=> console.log('deleted! '+id)} />
                        )
                    })
                }
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

