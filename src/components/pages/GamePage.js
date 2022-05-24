import AppGame from '../appGame/AppGame';
import words from '../../resources/data/words.json';
import '../app/app.scss';

const GamePage = () => {

    return (
        <AppGame words={words}/>
    )
}

export default GamePage;