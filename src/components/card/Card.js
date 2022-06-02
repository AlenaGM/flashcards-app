import { useState } from 'react';
import '../../styles/button.scss';

const Card = (props) => {

    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
            setPressed(!pressed);
    }

        return (
            <div className="game__card card">
                <div>{props.english}</div>
                <div>{props.transcription}</div>
                <div onClick = {handleClick}>
                    {pressed ?
                        <div className="card_translation">{props.russian}</div> :
                        <button className="button" onClick = {props.onCheck}>Проверить</button>}
                </div>
            </div>
        )
    }


export default Card;
