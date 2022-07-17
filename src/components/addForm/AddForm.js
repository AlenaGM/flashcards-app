import { useState } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';

import './addForm.scss';
import '../../styles/button.scss';


const AddForm = ({wordStore}) => {

    const [word, setWord] = useState ({
        english : "",
        transcription : "",
        russian : "",
        tags : ""
    });

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
        if (wordStore.english ===''|| wordStore.transcription==='' || wordStore.russian==='' || wordStore.tags==='') return;

        wordStore.addWords(word);
        clearForm();
    }

    const labelClasses = classnames({
        'label': true,
        'visible': wordStore.english ===''|| wordStore.transcription==='' || wordStore.russian==='' || wordStore.tags===''
    });

    const addButtonClasses = classnames({
        'button button__size-small': true,
        'button__disabled': wordStore.english ===''|| wordStore.transcription==='' || wordStore.russian==='' || wordStore.tags===''
    });

    return(
        <form className="app__table table form" onSubmit = {onSubmit}>
            <div>
            <input
                type="text"
                className={"input_edit"}
                placeholder="English"
                data-name={"english"}
                value={wordStore.english}
                onChange={handleChange}/>
            <input
                type="text"
                className="input_edit"
                placeholder="Transcription"
                data-name={"transcription"}
                value={wordStore.transcription}
                onChange={handleChange}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Russian"
                data-name={"russian"}
                value={wordStore.russian}
                onChange={handleChange}
                />
            <input
                type="text"
                className="input_edit"
                placeholder="Collection"
                data-name={"tags"}
                value={wordStore.tags}
                onChange={handleChange}
                />
            </div>
            <label className={labelClasses}>* Для того, чтобы добавить слово, заполните все поля</label>
            <button className={addButtonClasses} onClick = {onSubmit}>Добавить</button>
        </form>
    )
}

export default inject(['wordStore'])(observer(AddForm));


