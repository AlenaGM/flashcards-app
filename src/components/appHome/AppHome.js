import { Component } from 'react';
import Table from '../table/Table';
import AddForm from '../table/AddForm';
import words from '../../resources/data/words.json';
import './appHome.scss';
class AppHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            words
        }
        this.maxId = 16;
    }

    deleteItem = (id) => {
        this.setState(({words}) => {
            return {
                words: words.filter(word => word.id !== id)
            }
        })
    }

    saveItem = (id, english) => {
        console.log(`save this ${id}`);

        this.setState(prevState => ({
            words: prevState.words.map(
                word => word.id === id? {...words, id:'18', english:'state.english', transcription:'transcription' , russian:'russian', tags:'tags' }: word
            )
        }))
    }

    addItem = (english, transcription, russian, tags) => {
        const newItem = {
            english,
            transcription,
            russian,
            tags,
            id: this.maxId++
        }
        this.setState(({words}) => {
            const newArr = [...words, newItem];
            return {
                words: newArr
            }
        });
    }

    render() {
        return (
            <div className="app__home">
                <Table
                    words={this.state.words}
                    onDelete={this.deleteItem}
                    onSave={this.saveItem}
                    />
                <AddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default AppHome;
