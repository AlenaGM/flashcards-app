import './App.css';
import AppHeader from '../App-header/App-header';
import AppHome from '../App-home/App-home';
//import AppGame from '../App-game/App-game';
import AppFooter from '../App-footer/App-footer';
//import cards from '../mock/cards.json';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppHome/>
      <AppFooter/>
    </div>
  );
}

export default App;
