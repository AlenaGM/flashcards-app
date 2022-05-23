import {useState} from "react";

const Row = (props) => {

  const [id, setId] = useState(props.id);
  const [english, setEnglish] = useState(props.english);
  const [transcription, setTranscription] = useState(props.transcription);
  const [russian, setRussian] = useState(props.russian);
  const [tags, setTags] = useState(props.tags);
  const [isEdit, setEdit] = useState(false);

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleIdChange = (e) => {
      setId(e.target.value);
  }

  const handleEnglishChange = (e) => {
    setEnglish(e.target.value);
  }

  const handleTranscriptionChange = (e) => {
    setTranscription(e.target.value);
  }

  const handleRussianChange = (e) => {
    setRussian(e.target.value);
  }

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  }

  const onSave = () => {
    setEdit(!isEdit);
    setId(id);
    setEnglish(english);
    setTranscription(transcription);
    setRussian(russian);
    setTags(tags)
  }

  const onCancel = () => {
    setEdit(!isEdit);
    setId(props.id);
    setEnglish(props.english);
    setTranscription(props.transcription);
    setRussian(props.russian);
    setTags(props.tags)
  }

  let classNames ='table__row';

  if(isEdit){
    classNames += ' row_edit';
  }

  return (
    <tr className={classNames}>
      {isEdit ?
        <>
          <td><input type="text" className="input_edit" name="setId" defaultValue={id} onChange={handleIdChange}/></td>
          <td><input type="text" className="input_edit" name="setEnglish" defaultValue={english} onChange={handleEnglishChange}/></td>
          <td><input type="text" className="input_edit" name="setTranscription" defaultValue={transcription} onChange={handleTranscriptionChange}/></td>
          <td><input type="text" className="input_edit" name="setRussian" defaultValue={russian} onChange={handleRussianChange}/></td>
          <td><input type="text" className="input_edit" name="setTtags" defaultValue={tags} onChange={handleTagsChange}/></td>
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