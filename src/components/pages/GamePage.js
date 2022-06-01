import AppGame from '../appGame/AppGame';
import words from '../../resources/data/words.json';
import '../App/App.scss';

const GamePage = () => {

    return (
        <AppGame words={words}/>
    )
}

export default GamePage;