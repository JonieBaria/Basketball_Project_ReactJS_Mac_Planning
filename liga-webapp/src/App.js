import './App.css';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
