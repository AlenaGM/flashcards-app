import './pagination.scss';

const Pagination = ({wordsPerPage, totalWords, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>
                    <li className="pagination__page" key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </li>
                    )}
            </ul>
        </nav>
    )
}



export default Pagination;