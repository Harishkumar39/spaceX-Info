import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Rockets from './pages/Rockets';
import RocketInfo from './pages/RocketInfo';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Launches from './pages/Launches';


const App: React.FC<{}> = (props) => {
  return (
          
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-black">
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/history' element={<History /> } />
          <Route path='/rockets' element={<Rockets/> } />
          <Route path='/launches' element={<Launches />} />
          <Route path='rockets/:rocketId' element={<RocketInfo />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
