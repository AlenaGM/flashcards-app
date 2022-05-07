import React, {useState} from "react";
import './row.scss';

const Row = (props) => {

  const [edit, setEdit] = useState( false);

  const handleEditClick = () => {
      setEdit(!edit);
      console.log('edit');
  }

  const handleDeleteClick = () => {
    console.log('delete');
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
        <td><input className="input_edit" defaultValue={props.id}></input></td>
        <td><input className="input_edit" defaultValue={props.english}></input></td>
        <td><input className="input_edit" defaultValue={props.transcription}></input></td>
        <td><input className="input_edit" defaultValue={props.russian}></input></td>
        <td><input className="input_edit" defaultValue={props.tags}></input></td>
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
            <i className="fas fa-trash icon icon__delete" onClick = {handleDeleteClick}></i>
        </td>
        </>
      }
      </>
    )
}

export default Row;