import './app.scss';
import AppHeader from '../appHeader/AppHeader';
import AppHome from '../appHome/AppHome';
//import AppGame from '../appGame/AppGame';
import AppFooter from '../appFooter/AppFooter';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main className="main">

        <AppHome/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;