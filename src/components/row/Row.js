import React, {useState} from "react";
import './row.scss';

const Row = (props) => {

  const {id, english, transcription, russian, tags, onDelete, onClick} = props;
  const [isEdit, setEdit] = useState(false);

  let classNames ='table__row';

  if(isEdit){
    classNames += ' row_edit';
  }

  const onEdit = () => {
      setEdit(!isEdit);
  }

  const handleChange= (e) => {
    onClick(id);
    console.log(id);
    setState (state, {
      [e.target.name] : e.target.value
    })
  }

 const onCancel = () => {
   setEdit(!isEdit);
 }

  const [state, setState] = useState({id:'', english:'', transcription:'', russian:'', tags:''});



    return (

      <tr className={classNames}>
        {isEdit ?
          <>
          <td><input className="input_edit" name="id" defaultValue={id}></input></td>
          <td><input className="input_edit" name="english" defaultValue={english}></input></td>
          <td><input className="input_edit" name="transcription" defaultValue={transcription}></input></td>
          <td><input className="input_edit" name="russian" defaultValue={russian}></input></td>
          <td><input className="input_edit" defaultValue={tags}></input></td>
          <td>
              <i className="fas fa-check icon icon__save" onClick = {handleChange}> </i>
              <i className="fas fa-ban icon icon__cancel"
              onClick = {onCancel}
              ></i>
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
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
          </>
        }
      </tr>
    )
}

export default Row;