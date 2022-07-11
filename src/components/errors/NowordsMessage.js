import img from './tenor.gif';
import './errorMessage.scss';

const NowordsMessage = () => {
    return (
        <div className="errorMessage">
            <img  src={img} alt="Error"/>
            <p>Sorry, we could't get words from our server!</p>
        </div>
    )
}

export default NowordsMessage;