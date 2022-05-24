import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', maxWidth: "360px", objectFit: 'contain', margin: "0 auto", borderRadius: '8px'}}  src={img} alt="Error"/>
    )
}

export default ErrorMessage;