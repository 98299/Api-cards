import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardList from './components/CardList'; // Your main component that lists the cards
import AddCard from './components/button';   // Component for adding a new card
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundColor: "lightblue"}}>
        <nav className='hii' style={{ backgroundColor: "black", color: "white", height: "60px", width: "100vw", marginBottom: "5%", gap: "5px", padding: "5px" }}>
          <h1><i class="fa-solid fa-compass"></i> Abstract &nbsp; Help Center  &nbsp; &nbsp;  <Link to="/" style={{ color: "white" }}><i class="fa-solid fa-house"></i>Home</Link>
            &nbsp; &nbsp;<Link to="/add-card" style={{ marginLeft: "500px", textAlign: "center" }}><button class="btn btn-primary btn-lg">Submit a response</button></Link></h1>

        </nav>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


