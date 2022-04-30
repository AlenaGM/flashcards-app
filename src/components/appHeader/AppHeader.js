import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                    <span>English</span> Flashcards
            </h1>
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