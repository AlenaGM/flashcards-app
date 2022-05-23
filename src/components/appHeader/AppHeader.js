import logo from '../../resources/img/card-img.svg';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="app__title"><span>Wordy</span> English Vocabulary Cards</h1>
            </div>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    /
                    <li><a href="#">Game</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;