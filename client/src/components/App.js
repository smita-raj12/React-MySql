import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import Login from "./Login";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashPage from './SplashPage';
import Register from './Register';


function App() {
  return (
    <div className="App">
   
     {/* <Router>
      <Switch> */}
        {/* <Route path="/signin"> */}
          
        {/* </Route> */}
        {/* <Route path="/"> */}
            <SplashPage />
            <Login />
            <Register /> 
        {/* </Route>     */}
        {/* <Route path="/MovieList">   */}
            <Header />
            <MovieList />
      {/* </Route>
      </Switch>
    </Router> */}
    </div>
  )  
}

export default App;
