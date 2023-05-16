
import './App.css';
import Header from './components/header/header';
import HomePagePlantIt from './pages/homePagePlantIT';
import {
  BrowserRouter as Router,
 
  Route,
  Routes,

} from "react-router-dom";

import NewPlantUpload from './pages/newPlantUpload';

function App() {

 

  return (
    <div className="App" >
      <Router>
      <div>
        <Header />
      </div>
      <div className="homePageDivider">
       <Routes>
          <Route path="/" element={<HomePagePlantIt />}>
            
          </Route>
          <Route path="/newPlantUpload" element={<NewPlantUpload />}>
           
          </Route>
       </Routes>
      </div>
      </Router> 
    </div>
  );
}

export default App;
