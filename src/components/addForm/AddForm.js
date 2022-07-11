import { useState, useContext } from 'react';
import { WordsContext } from '../../context/wordsContext';
import './addForm.scss';
import '../../styles/button.scss';

const AddForm = () => {

    const {addWords}  = useContext(WordsContext);

    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("")
    const [russian, setRussian] = useState("")
    const [tags, setTags] = useState("")

    const handleChangeEnglish = (e) => {
        setEnglish(e.target.value.trim().toLowerCase());
    }

    const handleChangeTranscription = (e) => {
        setTranscription(e.target.value.trim().toLowerCase());
    }

    const handleChangeRussian = (e) => {
        setRussian(e.target.value.trim().toLowerCase());
    }

    const handleChangeTags = (e) => {
        setTags(e.target.value.trim().toLowerCase());
    }

    const clearForm = () => {
        setEnglish("");
        setTranscription("");
        setRussian("");
        setTags("");
    }

    const onSubmit = () => {
        if (english ===''|| transcription==='' || russian==='' || tags==='') return;

        const newWord = {
            english,
            transcription,
            russian,
            tags
        }

        addWords(newWord);
        clearForm();
    }

    let addButtonClassNames = 'button button__size-small';
    let labelClassNames = 'label';

    if(english ===''|| transcription==='' || russian==='' || tags===''){
        addButtonClassNames += ' button__disabled';
        labelClassNames += '_visible';
    }

    return(
        <form className="app__table table form" onSubmit = {onSubmit}>
            <div>
            <input
                type="text"
                className={"input_edit"}
                placeholder="English"
                name="english"
                value={english}
                onChange={handleChangeEnglish}/>
            <input
                type="text"
                className="input_edit"
                placeholder="Transcription"
                name="transcription"
                value={transcription}
                onChange={handleChangeTranscription}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Russian"
                name="russian"
                value={russian}
                onChange={handleChangeRussian}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Collection"
                name="tags"
                value={tags}
                onChange={handleChangeTags}
                />
            </div>
            <label className={labelClassNames}>* Для того, чтобы добавить слово, заполните все поля</label>
            <button className={addButtonClassNames} onClick = {onSubmit}>Добавить</button>
        </form>
    )
}

export default AddForm;


