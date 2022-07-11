import img from '../../resources/img/error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <img className='error_img' src={img} alt="Error"/>
    )
}

export default ErrorMessage;