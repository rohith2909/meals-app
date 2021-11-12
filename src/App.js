import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Categories from './components/Categories/Categories'


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route exact path="/categories" element={<Categories/>}/>
        
       </Routes>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
