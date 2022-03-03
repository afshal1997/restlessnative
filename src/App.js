import './App.css';
import Header from './Components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import Footer from './Components/common/Footer/index';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
