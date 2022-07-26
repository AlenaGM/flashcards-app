import { useContext } from 'react';

import { WordsContext } from '../../context/WordsContext';
import AppGame from '../appGame/AppGame';
import Spinner from '../spinner/Spinner';
import NoWordsMessage from '../errors/NowordsMessage';

import '../App/App.scss';


const GamePage = () => {

    const {errors, loading, words} = useContext(WordsContext);

    const spinner = loading ? <Spinner/> : null;
    const error = errors ? <NoWordsMessage/> : null;
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