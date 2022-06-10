import {useState} from "react";

const Row = (props) => {

  const [state, setState] = useState(props);
  //const [id, setId] = useState(props.id);
  //const [english, setEnglish] = useState(props.english);
  //const [transcription, setTranscription] = useState(props.transcription);
  //const [russian, setRussian] = useState(props.russian);
  //const [tags, setTags] = useState(props.tags);
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

  return (
    <tr className={classNames}>
      {isEdit ?
        <>
          <td><input type="text" className="input_edit" data-name={"id"} defaultValue={state.id} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"english"} defaultValue={state.english} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"transcription"} defaultValue={state.transcription} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"russian"} defaultValue={state.russian} onChange={handleChange}/></td>
          <td><input type="text" className="input_edit" data-name={"tags"} defaultValue={state.tags} onChange={handleChange}/></td>
          <td>
              <i className="fas fa-check icon icon__save" onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}></i>
          </td>
        </>
        :
        <>
          <td>{state.id}</td>
          <td>{state.english}</td>
          <td>{state.transcription}</td>
          <td>{state.russian}</td>
          <td>{state.tags}</td>
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