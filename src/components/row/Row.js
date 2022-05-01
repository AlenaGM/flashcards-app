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
          <i className="fas fa-edit _edit"></i>
          <button className='button _hidden'>Save</button>
          <button className='button _hidden'>Cansel</button>
        </td>
        <td>
          <i className="fas fa-trash _delete"></i>
        </td>
      </>
    )
}

export default Row;
