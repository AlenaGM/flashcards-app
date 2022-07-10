import AppGame from '../appGame/AppGame';
//import wordsList from '../../resources/data/words.json';
import { WordsContext } from '../../context/wordsContext';
import { useContext } from 'react';
import '../App/App.scss';


const GamePage = () => {

    const context = useContext(WordsContext).words;

    return (
        <AppGame words={context}/>
    )
}

export default GamePage;