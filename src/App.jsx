// import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/Header/header';
import Sidebar from './shared/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='body_container'>
          <Sidebar className="side_bar_vertical"></Sidebar>

          <div className='app_container w-100'>
            <Header className="app-header" />
            {/* <Sidebar className="side_bar_horizontal"></Sidebar> */}
            <div className='main_content p-3'>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
              </Routes>
            </div>
          </div>

        </div>
      </Router>

    </div>
  );
}

export default App;
