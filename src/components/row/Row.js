import {useState, useContext} from "react";
import { WordsContext } from "../../context/wordsContext";
import classnames from 'classnames';

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

  const onSave = () => {
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

  const rowClasses = classnames({
    'table__row': true,
    'row_edit': isEdit
});

  const inputClasses = classnames({
    'input_edit': true,
});

  const saveIconClasses = classnames({
    'fas fa-check icon icon__save': true,
    'icon__disabled': english ===''|| transcription==='' || russian==='' || tags===''
});

  return (
    <tr className={rowClasses}>
      {isEdit ?
        <>
          <td>
            {id}
          </td>
          <td>
            <input
              type="text"
              className={english==="" ? inputClasses + ' input_error' : inputClasses}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={transcription==="" ? inputClasses + ' input_error' : inputClasses}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={russian==="" ? inputClasses + ' input_error' : inputClasses}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={tags==="" ? inputClasses + ' input_error' : inputClasses}
              data-name={"tags"}
              defaultValue={tags}
              onChange={handleChange}/>
            {tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClasses} onClick={onSave}> </i>
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
