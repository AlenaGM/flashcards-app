import {useState, useContext} from "react";
import { WordsContext } from "../../context/wordsContext";

const Row = (props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);
  const { editWords } = useContext(WordsContext);

  const {id, english, transcription, russian, tags} = state;

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    e.stopPropagation();
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value.trim().toLowerCase(),
    });
  };

  const onSave = (e) => {
    if (english ===''|| transcription==='' || russian==='' || tags==='') return;

    setEdit(!isEdit);

    editWords(state);
  };

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...props,
    });
  }

  const onDelete = () => {
    props.onDelete(props.id);
  };

  let classNames ='table__row';
  let inputClassNames ='input_edit';
  let saveIconClassNames = 'fas fa-check icon icon__save';

  if(isEdit){
    classNames += ' row_edit';
  }

  if(english ===''|| transcription==='' || russian==='' || tags===''){
    saveIconClassNames += ' icon__disabled';
  }

  return (
    <tr className={classNames}>
      {isEdit ?
        <>
          <td>
            {id}
          </td>
          <td>
            <input
              type="text"
              className={english==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={transcription==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={russian==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={tags==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"tags"}
              defaultValue={tags}
              onChange={handleChange}/>
            {tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClassNames} onClick={onSave}> </i>
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
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
        </>
      }
    </tr>
  )
}

export default Row;
