import './row.scss';

const Row = (props) => {
    return (
      <>
        <td>{props.id}</td>
        <td>{props.english}</td>
        <td>{props.transcription}</td>
        <td>{props.russian}</td>
        <td>{props.tags}</td>
        <td>
          <button type="button" className="button button__edit">
            <i className="fas fa-edit"></i>
          </button>
          <button className='button hidden'>Save</button>
          <button className='button hidden'>Cansel</button>
        </td>
        <td>
          <button type="button" className="button button__delete">
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </>
    )
}

export default Row;
