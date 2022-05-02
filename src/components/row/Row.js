import './row.scss';

const Row = (props) => {
    return (
      <>
        {props.isEdit ?
        <>
        <td><input className="input_edit" value={props.id}></input></td>
        <td><input className="input_edit" value={props.english}></input></td>
        <td><input className="input_edit" value={props.transcription}></input></td>
        <td><input className="input_edit" value={props.russian}></input></td>
        <td><input className="input_edit" value={props.tags}></input></td>
        <td>
            <i className="fas fa-check icon__save"> </i>
            <i className="fas fa-ban icon__cancel"></i>
        </td>
        </>
        :
        <>
        <td>{props.id}</td>
        <td>{props.english}</td>
        <td>{props.transcription}</td>
        <td>{props.russian}</td>
        <td>{props.tags}</td>
        <td>
            <i className="fas fa-pen icon__edit"> </i>
            <i className="fas fa-trash icon__delete"></i>
        </td>
        </>
      }
      </>
    )
}

export default Row;