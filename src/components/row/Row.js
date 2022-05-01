import './row.scss';

const Row = (props) => {
    return (
      <>
        <td>{props.isEdit ? <input className="input_edit" value={props.id}></input> : props.id}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.english}></input> : props.english}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.transciption}></input> : props.transcription}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.russia}></input> : props.russian}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.tags}></input> : props.tags}</td>
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
