import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HomePagePlantIt from './pages/homePagePlantIT';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/Register';
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
          <Route path="/login" element={<Login/>}>

          </Route>
          <Route path="/register" element={<Register/>}>
           
          </Route>
          <Route path="/" element={<HomePagePlantIt/>}>
            
          </Route>
          <Route path="/newPlantUpload" element={<NewPlantUpload/>}>
           
          </Route>
       </Routes>
      </div>
      </Router> 
    </div>
  );
}

export default App;
