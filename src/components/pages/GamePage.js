import { useContext } from 'react';

import { WordsContext } from '../../context/wordsContext';
import AppGame from '../appGame/AppGame';
import Spinner from '../spinner/Spinner';
import NowordsMessage from '../errors/NowordsMessage';

import '../App/App.scss';


const GamePage = () => {

    const {errors, loading, words} = useContext(WordsContext);

    const spinner = loading ? <Spinner/> : null;
    const error = errors ? <NowordsMessage/> : null;
    const content = !(loading || errors) ? <AppGame words={words}/> : null;

    return (
        <>
            {error}
            {spinner}
            {content}
        </>
    )
}

export default GamePage;