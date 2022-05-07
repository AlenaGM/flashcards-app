import React, {useState} from "react";
import './row.scss';

const Row = (props) => {

  const [edit, setEdit] = useState( false);

  const handleEditClick = () => {
      setEdit(!edit);
      console.log('edit');
  }

  const handleSaveClick = () => {
    setEdit(!edit);
    console.log('save');
}

const handleCancelClick = () => {
  setEdit(!edit);
  console.log('cancel');
}

    return (
      <>
        {edit ?
        <>
        <td><input className="input_edit" value={props.id}></input></td>
        <td><input className="input_edit" value={props.english}></input></td>
        <td><input className="input_edit" value={props.transcription}></input></td>
        <td><input className="input_edit" value={props.russian}></input></td>
        <td><input className="input_edit" value={props.tags}></input></td>
        <td>
            <i className="fas fa-check icon icon__save" onClick = {handleSaveClick}> </i>
            <i className="fas fa-ban icon icon__cancel" onClick = {handleCancelClick}></i>
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
            <i className="fas fa-pen icon icon__edit" onClick = {handleEditClick}> </i>
            <i className="fas fa-trash icon icon__delete"></i>
        </td>
        </>
      }
      </>
    )
}

export default Row;