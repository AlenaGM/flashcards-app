import img from '../../resources/img/tenor.gif';
import './errorMessages.scss';


const NoWordsMessage = () => {

    return (
        <div className="noWordsMessage">
            <img className='error_img' src={img} alt="Error"/>
            <p>Sorry, we can't upload or download words!</p>
            <p>No connection! Or we are very busy!</p>
            <p>test 14:30</p>
        </div>
    )
}

export default NoWordsMessage;
