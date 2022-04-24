import './App-home.css';
import Filter from '../Home-filter/Home-filter';
import CardsList from '../Cards-list/Cards-list';
import Pagination from '../Pagination/Pagination';
import AddCard from '../Home-add-card/Home-add-card';

const AppHome = () => {
    return (
        <div>
            Вы на главной странице.
            <Filter/>
            <CardsList/>
            <Pagination/>
            <AddCard/>
        </div>
    )
}

export default AppHome;