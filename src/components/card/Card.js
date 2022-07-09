import {useState, useRef, useEffect, useContext} from "react";
import WordsContext from "../../context/wordsContext";
import '../../styles/button.scss';


const Card = (props) => {
    const context = useContext(WordsContext);
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
            <div>{context.english}</div>
            <div>{context.transcription}</div>
            <div onClick = {handleClick}>
                {pressed ?
                    <div className="card_translation">{context.russian}</div> :
                    <button className="button" ref={btnRef}>Проверить</button>}
            </div>
        </div>
    )
}


export default Card;
