import {useState, useRef, useEffect} from "react";
import { observer, inject } from 'mobx-react';

import '../../styles/button.scss';


const Card = ({wordStore, word}) => {

    const [pressed, setPressed] = useState(false);
    const btnRef = useRef();

    useEffect(()=>{
        btnRef.current.focus();
    }, []);

    const handleClick = () => {
        setPressed(!pressed);
        wordStore.addLearned(wordStore.id);
    }

    return (
        <div className="game__card card">
            <div>{wordStore.english}</div>
            <div>{wordStore.transcription}</div>
            <div onClick = {handleClick}>
                {pressed ?
                    <div className="card_translation">{wordStore.russian}</div> :
                    <button className="button" ref={btnRef}>Проверить</button>}
            </div>
        </div>
    )
}

export default inject(['wordStore'])(observer(Card));