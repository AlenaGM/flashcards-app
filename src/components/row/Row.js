import React, {useState} from "react";
import './row.scss';

const Row = ({id, english, transcription, russian, tags, onDelete}) => {

  let classNames ='table__row';

  const [isEdit, setEdit] = useState(false);

  if(isEdit){
    classNames += ' row_edit';
  }

  const handleEditClick = () => {
      setEdit(!isEdit);
  }

  const handleSaveClick = () => {
    setEdit(!isEdit);
}

const handleCancelClick = () => {
  setEdit(!isEdit);
}

const [state = {id:'', english:'', transcription:'', russian:'', tags:''}, setState] = useState(false);

const onValueChange = (e) => {
  setState (!state,{
    [e.target.name] : e.target.value
  })
}

    return (

      <tr className={classNames}>
        {isEdit ?
        <>
        <td><input className="input_edit" name="id" defaultValue={id} onChange={onValueChange}></input></td>
        <td><input className="input_edit" name="english" defaultValue={english} onChange={onValueChange}></input></td>
        <td><input className="input_edit" name="transcription" defaultValue={transcription} onChange={onValueChange}></input></td>
        <td><input className="input_edit" name="russian" defaultValue={russian} onChange={onValueChange}></input></td>
        <td><input className="input_edit" defaultValue={tags} onChange={onValueChange}></input></td>
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
            <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
        </td>
        </>
      }
      </tr>
    )
}

export default Row;