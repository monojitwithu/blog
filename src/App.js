
import './App.css';
import {BrowserRouter,Switch,Route}from "react-router-dom"
import Home from './screents/Home';
import Post from './screents/Post';
import Details from './screents/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        {/* <Route path="/Home"><Home/></Route>
        <Route path="/Post"><Post/></Route> */}
        <Route exact path="/" render={()=><Home/>}/>
        <Route exact path="/Post" render={()=><Post/>}/>
        <Route exact path="/Details" render={()=><Details/>}/>
      </Switch>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
