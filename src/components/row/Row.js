import './row.scss';

const Row = (props) => {
    return (
        <div className="table__row row">
            <div className="row__cell" >{props.id}</div>
            <div className="row__cell">{props.english}</div>
            <div className="row__cell">{props.transcription}</div>
            <div className="row__cell">{props.russian}</div>
            <div className="row__cell">{props.tags}</div>
            <div className="row__cell">
              <button className='button'>Save</button>
            </div>
            <div className="row__cell">
              <button type="button" className="button">
                <i className="fas fa-edit"></i>
              </button>
            </div>
            <div className="row__cell">
              <button type="button" className="button">
                <i className="fas fa-trash"></i>
              </button>
            </div>
        </div>
    )
}

export default Row;
