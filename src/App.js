import './App.css';
import AppHeader from './components/App-header/App-header';
import AppHome from './components/App-home/App-home';
//import AppGame from './components/App-game/App-game';
import AppFooter from './components/App-footer/App-footer';
//import cards from './mock/cards.json';

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
