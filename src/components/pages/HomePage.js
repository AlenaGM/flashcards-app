import { useContext } from 'react';
import { WordsContext } from '../../context/wordsContext';

import Table from '../table/Table';
import Spinner from '../spinner/Spinner';
import AddForm from '../addForm/AddForm';

import '../App/App.scss';


const HomePage = () => {

    const {loading} = useContext(WordsContext);

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) ? <Table/> : null;

    return (
        <div className="app__home">
            {spinner}
            {content}
            <AddForm/>
        </div>
    )
}

export default HomePage;

