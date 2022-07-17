import {useState} from "react";
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';

//import { WordsContext } from "../../context/wordsContext";


const Row = ({wordStore, word}) => {

  const [state, setState] = useState(word);
  const [isEdit, setEdit] = useState(false);

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    setState({
      ...wordStore.words,
      [e.target.dataset.name]: e.target.value.toLowerCase(),
    });
  };

  const onSave = () => {
    if (state.english ===''|| state.transcription==='' || state.russian==='' || state.tags==='') return;
    setEdit(!isEdit);
    wordStore.editWords(state);
  };

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...wordStore.words,
    });
  }

  const onDelete = () => {
    wordStore.deleteWords(word.id);
  };

  const saveIconClasses = classnames({
    'fas fa-check icon icon__save': true,
    'icon__disabled': state.english ===''|| state.transcription==='' || state.russian==='' || state.tags===''
  });

  return (
    <tr className={classnames('table__row', {row_edit: isEdit})}>
      {isEdit ?
        <>
          <td>
            {state.id}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.english===""})}
              data-name={"english"}
              value={state.english}
              onChange={handleChange}/>
            {state.english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.transcription===""})}
              data-name={"transcription"}
              value={state.transcription}
              onChange={handleChange}/>
            {state.transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.russian===""})}
              data-name={"russian"}
              value={state.russian}
              onChange={handleChange}/>
            {state.russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.tags===""})}
              data-name={"tags"}
              value={state.tags}
              onChange={handleChange}/>
            {state.tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClasses} onClick={onSave}> </i>
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
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
        </>
      }
    </tr>
  )
}

export default inject(['wordStore'])(observer(Row));
