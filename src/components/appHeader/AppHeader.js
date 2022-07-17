import {Link, NavLink} from 'react-router-dom';

import logo from '../../resources/img/card-img.svg';
import './appHeader.scss';


const AppHeader = () => {

    return (
        <header className="app__header">
            <Link to="/">
                <div>
                    <img className="logo" src={logo} alt="logo"></img>
                    <h1 className="app__title"><span>Wordy</span> English Vocabulary Cards</h1>
                </div>
            </Link>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        end
                        style={({ isActive }) => ({
                        color: isActive ? '#3ABDB5' : 'inherit'
                        })}
                        to="/">Home</NavLink></li>
                    /
                    <li><NavLink
                        end
                        style={({ isActive }) => ({
                            color: isActive ? '#3ABDB5' : 'inherit'
                            })}
                        to="/game">Game</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;