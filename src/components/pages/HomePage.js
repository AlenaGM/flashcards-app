import { observer, inject } from 'mobx-react';

import Table from '../table/Table';
import Spinner from '../spinner/Spinner';
import NowordsMessage from '../errors/NowordsMessage';
import AddForm from '../addForm/AddForm';

import '../App/App.scss';


const HomePage = ({wordStore}) => {

    const spinner = wordStore.loading ? <Spinner/> : null;
    const error = wordStore.errors ? <NowordsMessage/> : null;
    const content = !(wordStore.loading || wordStore.errors) ? <Table/> : null;

    return (
        <div className="app__home">
            {error}
            {spinner}
            {content}
            <AddForm/>
        </div>
    )
}

export default inject(['wordStore'])(observer(HomePage));

