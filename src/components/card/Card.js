import React, {useState} from "react";
import './card.scss';
import '../../styles/button.scss';


const Card = (props) => {

    const [pressed, setPressed] = useState( false);

    const handleClick = () => {
        setPressed(!pressed);
    }

    return (
    <>
        <div>{props.english}</div>
        <div>{props.transcription}</div>
        <div onClick = {handleClick}>
            {pressed ?
                <div className="card_translation">{props.russian}</div> :
                <button className="button">Проверить</button>}
        </div>
    </>
    )
}

export default Card;
