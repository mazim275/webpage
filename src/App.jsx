

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import About from './components/About.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about/:id' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
