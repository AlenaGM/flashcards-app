import { observer, inject } from 'mobx-react';

import AppGame from '../appGame/AppGame';
import Spinner from '../spinner/Spinner';
import NowordsMessage from '../errors/NowordsMessage';

import '../App/App.scss';


const GamePage = ({wordStore}) => {

    const spinner = wordStore.loading ? <Spinner/> : null;
    const error = wordStore.errors ? <NowordsMessage/> : null;
    const content = !(wordStore.loading || wordStore.errors) ? <AppGame words={wordStore.words}/> : null;

    return (
        <>
            {error}
            {spinner}
            {content}
        </>
    )
}

export default inject(['wordStore'])(observer(GamePage));
