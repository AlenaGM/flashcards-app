import React, {useState} from "react";
import './row.scss';

const Row = ({id, english, transcription, russian, tags, onClick}) => {

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
        <td><input className="input_edit" defaultValue={id}></input></td>
        <td><input className="input_edit" defaultValue={english}></input></td>
        <td><input className="input_edit" defaultValue={transcription}></input></td>
        <td><input className="input_edit" defaultValue={russian}></input></td>
        <td><input className="input_edit" defaultValue={tags}></input></td>
        <td>
            <i className="fas fa-check icon icon__save" onClick = {handleSaveClick}> </i>
            <i className="fas fa-ban icon icon__cancel" onClick = {handleCancelClick}></i>
        </td>
        </>
        :
        <>
        <td>{id}</td>
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
        <td>{tags}</td>
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