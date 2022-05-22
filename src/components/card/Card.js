import { Component } from 'react';
import '../../styles/button.scss';

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            english : props.english,
            transcription : props.transcription,
            russian: props.russian,
            pressed: false
        }
    }

    handleClick = () => {
        this.setState(({pressed}) => ({
            pressed:!pressed
        }))
    }

    render(){
        const {english, transcription, russian, pressed} = this.state;

        return (
            <div className="game__card card">
                <div>{english}</div>
                <div>{transcription}</div>
                <div onClick = {this.handleClick}>
                    {pressed ?
                        <div className="card_translation">{russian}</div> :
                        <button className="button">Проверить</button>}
                </div>
            </div>
        )
    }
}

export default Card;
