import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
