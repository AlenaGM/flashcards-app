import { Component } from 'react';
import './addForm.scss';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            english: '',
            transcription: '',
            russian: '',
            tags:'',
            id:''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = () => {

        if (this.state.english.length < 1 || this.state.english.length < 1 || !this.state.id) return;
        this.props.onAdd(this.state.english, this.state.transcription, this.state.russian, this.state.tags, this.state.id);
        this.setState({
            english: '',
            transcription: '',
            russian: '',
            tags:'',
            id:''
        })
    }

    render() {
        const {english, russian, transcription, tags, id} = this.state;

        return(
            <form className="app__table table form" onSubmit = {this.onSubmit}>
                <input
                    type="number"
                    className="input_edit"
                    placeholder="ID"
                    name="id"
                    defaultValue={id}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    placeholder="English"
                    name="english"
                    defaultValue={english}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    placeholder="Transcription"
                    name="transcription"
                    defaultValue={transcription}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    placeholder="Russian"
                    name="russian"
                    defaultValue={russian}
                    onChange={this.onValueChange}/>
                <input
                    type="text"
                    className="input_edit"
                    placeholder="Collection"
                    name="tags"
                    defaultValue={tags}
                    onChange={this.onValueChange}/>
                <div>
                    <i className="fas fa-plus icon icon__save" onClick = {this.onSubmit}></i>
                </div>
            </form>
        )
    }
}

export default AddForm;


