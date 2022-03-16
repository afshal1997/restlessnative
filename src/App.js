import './App.css';
import Header from './Components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/common/Footer/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Routers from './Routers';


function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
