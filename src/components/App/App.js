import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import Table from '../table/Table';
import AddForm from '../addForm/AddForm';
import AppGame from '../appGame/AppGame';
import AppFooter from '../appFooter/AppFooter';
import words from '../../resources/data/words.json';

import './app.scss';

class App extends Component {

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

    addItem = (english, transcription, russian, tags) => {
        const newWord = {
            english,
            transcription,
            russian,
            tags,
            id: this.maxId++
        }
        this.setState(({words}) => {
            const newArr = [...words, newWord];
            return {
                words: newArr
            }
        });
    }

    saveItem = (id) => {
        console.log(`save me! ${id}`)
    }

    render(){
        return (
            <div className="app">
                <AppHeader/>
                <main className="main">
                    <div className="app__home">
                        <Table
                            words={this.state.words}
                            onDelete={this.deleteItem}
                            onSave={this.saveItem}
                            />
                        <AddForm onAdd={this.addItem}/>
                    </div>
                    <AppGame
                        words={this.state.words}/>
                </main>
                <AppFooter/>
            </div>
        );
    }
}

export default App;