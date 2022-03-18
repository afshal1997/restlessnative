import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './Components/Pages/Home';
import TheVessel from './Components/Pages/TheVessel';
import {Route, BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';


function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/the-vessel" exact component={TheVessel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
