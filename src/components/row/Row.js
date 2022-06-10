import {useState} from "react";

const Row = (props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const onSave = (e) => {
    setEdit(!isEdit);
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
    });
    console.log(`id: ${state.id}, english: ${state.english}, transcription: ${state.transcription}, russian: ${state.russian}, collection: ${state.tags}`);
  }

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...props,
    });
  }

  let classNames ='table__row';

  if(isEdit){
    classNames += ' row_edit';
  }

  const {id, english, transcription, russian, tags} = state;

  return (

    <tr className={classNames}>
      {isEdit ?
        <>
          <td><input type="text" className="input_edit" data-name={"id"} defaultValue={id} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"english"} defaultValue={english} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"transcription"} defaultValue={transcription} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"russian"} defaultValue={russian} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"tags"} defaultValue={tags} onChange={handleChange}/></td>
          <td>
              <i className="fas fa-check icon icon__save" onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}></i>
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
              <i className="fas fa-trash icon icon__delete" onClick = {props.onDelete}></i>
          </td>
        </>
      }
    </tr>
  )
}

export default Row;