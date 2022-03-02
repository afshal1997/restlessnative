import './App.css';
import Header from './Components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
