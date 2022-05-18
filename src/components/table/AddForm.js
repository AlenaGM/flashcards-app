import { Component } from 'react';
import './table.scss';
import words from '../../resources/data/words.json';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            english: 'dog',
            transcription: '[ˈdɑɡ]',
            russian: 'собака',
            tags:'животные',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.english, this.state.transcription, this.state.russian, this.state.tags);
    }

    render() {
        const {english, russian, transcription, tags} = this.state;

        return(
            <form className="app__table table form" onSubmit = {this.onSubmit}>
                <input
                    type="text"
                    className="input_edit"
                    name="english"
                    defaultValue={english}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    name="transcription"
                    defaultValue={transcription}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    name="russian"
                    defaultValue={russian}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    name="tags"
                    defaultValue={tags}
                    onChange={this.onValueChange}/>
                <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
            </form>
        )
    }
}

export default AddForm;


