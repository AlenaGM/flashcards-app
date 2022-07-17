import {useState, useContext} from "react";
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';

//import { WordsContext } from "../../context/wordsContext";


const Row = ({wordStore},props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);

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
    if (wordStore.english ===''|| wordStore.transcription==='' || wordStore.russian==='' || wordStore.tags==='') return;
    setEdit(!isEdit);
    wordStore.editWords(state);
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

  const saveIconClasses = classnames({
    'fas fa-check icon icon__save': true,
    'icon__disabled': wordStore.english ===''|| wordStore.transcription==='' || wordStore.russian==='' || wordStore.tags===''
  });

  return (
    <tr className={classnames('table__row', {row_edit: isEdit})}>
      {isEdit ?
        <>
          <td>
            {wordStore.id}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.english===""})}
              data-name={"english"}
              defaultValue={wordStore.english}
              onChange={handleChange}/>
            {wordStore.english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.transcription===""})}
              data-name={"transcription"}
              defaultValue={wordStore.transcription}
              onChange={handleChange}/>
            {wordStore.transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.russian===""})}
              data-name={"russian"}
              defaultValue={wordStore.russian}
              onChange={handleChange}/>
            {wordStore.russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.tags===""})}
              data-name={"tags"}
              defaultValue={wordStore.tags}
              onChange={handleChange}/>
            {wordStore.tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClasses} onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}></i>
          </td>
        </>
        :
        <>
          <td>{wordStore.id}</td>
          <td>{wordStore.english}</td>
          <td>{wordStore.transcription}</td>
          <td>{wordStore.russian}</td>
          <td>{wordStore.tags}</td>
          <td>
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
        </>
      }
    </tr>
  )
}

export default inject(['wordStore'])(observer(Row));
