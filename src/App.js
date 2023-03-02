import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HomePagePlantIt from './pages/homePagePlantIT';

function App() {
  return (
    <div className="App" >
      <div>
        <Header />
      </div>
      <div className="homePageDivider">
       <HomePagePlantIt/>
      </div>
        
    </div>
  );
}

export default App;
