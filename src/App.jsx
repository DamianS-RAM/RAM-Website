import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Quality from '@pages/Quality'

function App() {

    /* const [currentTime, setCurrentTime] = useState(0);
  
    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:5000/api/time")
            .then(res => res.json())
            .then(data => console.log(data.message));
      };

      fetchData();
    }, []); */

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quality" element={<Quality />} />
        </Routes>
    )
}

export default App
