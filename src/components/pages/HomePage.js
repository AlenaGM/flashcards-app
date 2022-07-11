

import Table from '../table/Table';
import AddForm from '../addForm/AddForm';


import '../App/App.scss';


const HomePage = () => {

    return (
        <div className="app__home">
            <Table/>
            <AddForm/>
        </div>
    )
}

export default HomePage;