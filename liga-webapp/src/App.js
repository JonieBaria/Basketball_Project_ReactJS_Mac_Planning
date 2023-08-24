import './App.css';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import LiveCurrentScore from './components/LiveCurrentScore';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Schedule from './components/Schedule';
import Players from './components/Players';
import GameRecorder from './components/GameRecorder';


function App() {
  return (
    <div className="App">
      <Router>      
        <Navbar/>
        <LiveCurrentScore />
        <MainContent/>
        <Routes>
          <Route exact path="/" element={<News/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/players" element={<Players/>}/>
          <Route path="/create-game" element={<GameRecorder/>}/>
        </Routes>
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
