import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
            <div style={{
                'display': 'flex',
                'flexDirection': 'column',
                'flexGrow': '1',
                'width': '100%',
                'max-width': '1000px',
                'margin': '4vw auto',
                'justifyContent': 'center',
                'alignItems': 'center',
                'padding': '16px'}}>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color':'#FB7575','marginTop': '30px'}}>This page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color':'#3ABDB5', 'marginTop': '24px'}} to="/">Back to home page</Link>
        </div>
    )
}

export default Page404;