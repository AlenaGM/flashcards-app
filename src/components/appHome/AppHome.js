import { Component } from 'react';
import Table from '../table/Table';
import words from '../../resources/data/words.json';
import './appHome.scss';
class AppHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            words
        }
    }

    deleteItem = (id) => {
        this.setState(({words}) => {
            return {
                words: words.filter(word => word.id !== id)
            }
        })
    }

    //editItem = (id, english, transcription, russian, tags) => {
    //    const newWord= {
    //        id,
    //        english,
    //        transcription,
    //        russian,
    //        tags,
    //        isEdit: false
    //    }
    //    this.setState(({words}) => {
    //        const newArr = [...words, newWord];
    //        return {
    //            words: newArr
    //        }
    //    });
    //}

    saveItem = (id) => {
        console.log(`save this ${id}`)
        this.setState(({words}) => ({
            words: words.map(word => {
                if (word.id === id) {
                    return {...word, onSave:!word.onSave}
                }
                return word;
            })
        }))
    }

    render() {

        return (
            <div className="app__home">
                <Table
                    words={this.state.words}
                    onDelete={this.deleteItem}
                    //onEdit={this.editItem}
                    onSave={this.saveItem}
                    />
            </div>
        )
    }
}

export default AppHome;
