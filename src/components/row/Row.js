import {useState} from "react";
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';


const Row = ({wordStore, word}) => {

  const [state, setState] = useState(word);
  const [isEdit, setEdit] = useState(false);

  const {id, english, transcription, russian, tags} = state;

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    e.stopPropagation();
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value.toLowerCase(),
    });
  };

  const onSave = () => {
    if (english ===''|| transcription==='' || russian==='' || tags==='') return;
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
    'icon__disabled': english ===''|| transcription==='' || russian==='' || tags===''
  });

  return (
    <tr className={classnames('table__row', {row_edit: isEdit})}>
      {isEdit ?
        <>
          <td>
            {id}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.english===""})}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.transcription===""})}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.russian===""})}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: wordStore.tags===""})}
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

export default inject(['wordStore'])(observer(Row));
