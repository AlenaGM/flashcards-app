import './table.scss';
import Row from '../row/Row';
import words from '../../resources/data/words.json';


const Table = () => {
    return (
        <div className="app__table table">
            {
                words.map((word) =>
                <Row
                    id={word.id}
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    tags={word.tags}/>
                )
            }
        </div>
    )
}

export default Table;
