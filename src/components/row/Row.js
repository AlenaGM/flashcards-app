import {useState} from "react";

const Row = (props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);
  const [errors, setErrors] = useState({});

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
    checkValidation();
    setEdit(!isEdit);
  };

  const checkValidation = () => {
    const newErrors = Object.keys(state).reduce((errorsList, item) => {
      // eslint-disable-next-line default-case
      switch (item) {
        case 'id':
        case 'english':
        case 'transcription':
        case 'russian':
        case 'tags':
          errorsList = {
            ...errorsList,
            [item]: state[item].trim().length > 0 ? undefined : 'Пустое поле',
          };
          break;
      }
      return errorsList;
    }, {});

    setErrors(newErrors);
  };

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...props,
    });
  }

  let classNames ='table__row';
  let inputClassNames ='input_edit';

  if(isEdit){
    classNames += ' row_edit';
  }

  const {id, english, transcription, russian, tags} = state;

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
              className={inputClassNames}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
              <label>
                Пустое поле!!
              </label>
          </td>
          <td>
            <input
              type="text"
              className={inputClassNames}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
              <label>
                Пустое поле!!
              </label>
          </td>
          <td>
            <input
              type="text"
              className={inputClassNames}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
              <label>
                Пустое поле!!
              </label>
          </td>
          <td>
            <input
              type="text"
              className={inputClassNames}
              data-name={"tags"}
              defaultValue={tags}
              onChange={handleChange}/>
            <label>
              Пустое поле!!
            </label>
          </td>
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