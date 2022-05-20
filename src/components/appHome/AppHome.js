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

//    saveItem = (id) => {
//        console.log(`save this ${id}`);
//        this.setState(({words}) => ({
//            words: words.map(
//                word => word.id === id?
//                {...word}
//                : word
//            )
//        }))
//    }

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
