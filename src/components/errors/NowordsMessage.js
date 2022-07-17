import img from '../../resources/img/tenor.gif';
import './errorMessage.scss';


const NowordsMessage = () => {

    return (
        <div className="noWordsMessage">
            <img className='.error_img' src={img} alt="Error"/>
            <p>Sorry, we don't get or send words today! </p>
            <p>No connection! Or we are very busy! </p>
            <p>Or your words are simply not good enough! </p>
        </div>
    )
}

export default NowordsMessage;