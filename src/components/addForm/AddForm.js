import { useState, useContext } from 'react';
import classnames from 'classnames';

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
            [e.target.dataset.name]: e.target.value.toLowerCase(),
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

    const labelClasses = classnames({
        'label': true,
        'visible': english ===''|| transcription==='' || russian==='' || tags===''
    });

    const addButtonClasses = classnames({
        'button button__size-small': true,
        'button__disabled': english ===''|| transcription==='' || russian==='' || tags===''
    });

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
            <label className={labelClasses}>* Для того, чтобы добавить слово, заполните все поля</label>
            <button className={addButtonClasses} onClick = {onSubmit}>Добавить</button>
        </form>
    )
}

export default AddForm;


