import { useState, useRef, useEffect } from 'react';
import '../../styles/button.scss';

const Card = (props) => {

    const [pressed, setPressed] = useState(false);
    const btnRef = useRef();

    useEffect(()=>{
        btnRef.current.focus();
    }, []);

    const handleClick = () => {
            setPressed(!pressed);
            props.addLearned(props.id);
    }

        return (
            <div className="game__card card">
                <div>{props.english}</div>
                <div>{props.transcription}</div>
                <div onClick = {handleClick}>
                    {pressed ?
                        <div className="card_translation">{props.russian}</div> :
                        <button className="button" ref={btnRef}>Проверить</button>}
                </div>
            </div>
        )
    }


export default Card;
