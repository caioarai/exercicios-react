import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
