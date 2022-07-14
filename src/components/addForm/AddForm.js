import { useState, useContext } from 'react';
import { WordsContext } from '../../context/wordsContext';
import './addForm.scss';
import '../../styles/button.scss';

const AddForm = () => {

    const {addWords}  = useContext(WordsContext);

    const [word, setWord] = useState ({
        english : "",
        transcription : "",
        russian : "",
        tags : ""
    });

    const {english, transcription, russian, tags} = word;

    const handleChange = (e) => {
        setWord({
            ...word,
            [e.target.dataset.name]: e.target.value.trim().toLowerCase(),
        });
    };

    const clearForm = () => {
        setWord({
            english : "",
            transcription : "",
            russian : "",
            tags : ""
        })
    }

    const onSubmit = () => {
        if (english ===''|| transcription==='' || russian==='' || tags==='') return;

        addWords(word);
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
                data-name={"english"}
                value={english}
                onChange={handleChange}/>
            <input
                type="text"
                className="input_edit"
                placeholder="Transcription"
                data-name={"transcription"}
                value={transcription}
                onChange={handleChange}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Russian"
                data-name={"russian"}
                value={russian}
                onChange={handleChange}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Collection"
                data-name={"tags"}
                value={tags}
                onChange={handleChange}
                />
            </div>
            <label className={labelClassNames}>* Для того, чтобы добавить слово, заполните все поля</label>
            <button className={addButtonClassNames} onClick = {onSubmit}>Добавить</button>
        </form>
    )
}

export default AddForm;


