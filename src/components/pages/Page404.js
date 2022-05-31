import {Link} from 'react-router-dom';
import ErrorMessage from "../errorMessage/ErrorMessage";
import './page404.scss';

const Page404 = () => {
    return (
        <div className="errorMessage">
            <ErrorMessage/>
            <p>This page doesn't exist</p>
            <Link className="backHomeLink" to="/">Back to home page</Link>
        </div>
    )
}

export default Page404;