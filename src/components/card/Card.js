import './card.scss';
import '../../styles/button.scss';

const Card = (props) => {
    return (
    <>
        <div>{props.english}</div>
        <div>{props.transcription}</div>
        <div>{props.russian}</div>
        <div>
            <button className="button">Проверить</button>
        </div>
    </>
    )
}

export default Card;