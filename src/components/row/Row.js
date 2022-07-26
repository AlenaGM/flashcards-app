import {useState, useContext} from "react";
import classnames from 'classnames';

import { WordsContext } from "../../context/WordsContext";

const Row = (props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);

  const { editWords, setTerm  } = useContext(WordsContext);
  const {id, english, transcription, russian, tags} = state;

  const filledIn = !english|| !transcription || !russian || !tags;

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

  const onSave = (e) => {
    if (filledIn) return;
    setEdit(!isEdit);
    editWords(state);
    setTerm('');
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
    'icon__disabled': filledIn
  });

  const inputEnglishClasses = classnames('input_edit', {input_error: english===""});
  const inputTranscriptionClasses = classnames('input_edit', {input_error: transcription===""});
  const inputRussianClasses = classnames('input_edit', {input_error: russian===""});
  const inputTagsClasses = classnames('input_edit', {input_error: tags===""});

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
              className={inputEnglishClasses}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={inputTranscriptionClasses}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={inputRussianClasses}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={inputTagsClasses}
              data-name={"tags"}
              defaultValue={tags}
              onChange={handleChange}/>
            {tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClasses} onClick={onSave}/>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}/>
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
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}/>
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}/>
          </td>
        </>
      }
    </tr>
  )
}

export default Row;
