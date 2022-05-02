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
          <div className="buttons">
            <button className='button button__save'>Save</button>
            <button className='button button__cancel'>Cancel</button>
          </div>
        </td>
        <td>
          <i className="fas fa-trash button__delete"></i>
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
            <i className="fas fa-edit button__edit"> </i>
        </td>
        <td>
            <i className="fas fa-trash button__delete"></i>
        </td>
        </>
      }
      </>
    )
}

export default Row;


const isEditStyle = {backgroundColor:'#f33'};