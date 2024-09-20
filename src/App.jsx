// import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Toaster from './pages/toaster/toaster-message';

function App() {
  return (
    <div className="App">
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toaster" element={<Toaster />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
