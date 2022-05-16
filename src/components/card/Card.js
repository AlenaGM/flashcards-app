import React, {useState} from "react";
import './card.scss';
import '../../styles/button.scss';


const Card = ({english, transcription, russian}) => {

    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);
    }

    return (
        <div className="playground__card card">
            <div>{english}</div>
            <div>{transcription}</div>
            <div onClick = {handleClick}>
                {pressed ?
                    <div className="card_translation">{russian}</div> :
                    <button className="button">Проверить</button>}
            </div>
        </div>
    )
}

export default Card;
