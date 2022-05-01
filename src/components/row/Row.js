import './row.scss';

const Row = (props) => {
    return (
      <>
        <td>{props.isEdit ? <input className="input_edit" value={props.id}></input> : props.id}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.english}></input> : props.english}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.transcription}></input> : props.transcription}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.russian}></input> : props.russian}</td>
        <td>{props.isEdit ? <input className="input_edit" value={props.tags}></input> : props.tags}</td>
        <td>{props.isEdit ?
          <div className="buttons">
            <i className="fas fa-check _edit"></i>
            <i className='fas fa-ban _edit'></i>
          </div> :
          <i className="fas fa-edit _edit"> </i>
        }
        </td>
        <td>
          <i className="fas fa-trash _delete"></i>
        </td>
      </>
    )
}

export default Row;
