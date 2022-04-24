import './Home-filter.css';
import FilterSelect from '../Home-filter-select/Home-filter-select';
import FilterOptions from '../Home-filter-options/Home-filter-options';


const Filter = () => {
    return (
        <div>
            Это фильтр. Он состоит из 2-х частей
            <FilterSelect/>
            <FilterOptions/>
        </div>
    )
}

export default Filter;