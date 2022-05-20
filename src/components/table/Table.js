import Row from '../row/Row';
import './table.scss';

const Table = ({words, onDelete}) => {

    const elements = words.map(word => {

        const {id, ...wordProps} = word;

        return (
        <Row
            key={id}
            id={id}
            {...wordProps}
            onDelete={()=> onDelete(id)}/>
        )
    })

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
                    {elements}
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

