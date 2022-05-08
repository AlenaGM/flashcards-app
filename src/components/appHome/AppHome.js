import './appHome.scss';
import Table from '../table/Table';
import words from '../../resources/data/words.json';

const AppHome = () => {
    return (
        <div className="app__home">
            <Table
                words={words}
                onDelete={id=>console.log(id)}/>
        </div>
    )
}

export default AppHome;
