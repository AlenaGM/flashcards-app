import { useContext } from 'react';
import { WordsContext } from '../../context/WordsContext';

import Table from '../table/Table';
import AddForm from '../addForm/AddForm';
import Spinner from '../spinner/Spinner';
import NoWordsMessage from '../errors/NowordsMessage';

import '../App/App.scss';


const HomePage = () => {

    const {loading, errors} = useContext(WordsContext);

    const spinner = loading ? <Spinner/> : null;
    const error = errors ? <NoWordsMessage/> : null;
    const content = !(loading || errors) ? <Table/> : null;

    return (
        <div className="app__home">
            {error}
            {spinner}
            {content}
            <AddForm/>
        </div>
    )
}

export default HomePage;

