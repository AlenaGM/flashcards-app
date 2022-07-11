import AppGame from '../appGame/AppGame';
import { WordsContext } from '../../context/wordsContext';
import { useContext } from 'react';
import Spinner from '../spinner/Spinner';
import '../App/App.scss';


const GamePage = () => {

    const {loading, words} = useContext(WordsContext);
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) ? <AppGame words={words}/> : null;

    return (
        <>
            {spinner}
            {content}
        </>
    )
}

export default GamePage;