import React, {useEffect, useState} from "react";
import { Route, Link, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Timeline from "./components/Timeline/Timeline";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./core/Footer/Footer";
function App() {

  const location = useLocation();

  const nonFixed = {
    position: 'static', 
    backgroundColor: '#0076d6',
    color: 'white'
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);


  return (
    // <Router>

    <>
      <header>
      <nav className={navbar || location.pathname != '/' ? 'navbar sticky' : 'navbar'} style={location.pathname == '/' || (window.innerHeight > 710 && location.pathname == '/') ? {position: 'fixed'} : nonFixed}>
            <div className="max-width">
                <Link to="/"><div className="logo"><a href="#">AFG.</a></div></Link>
                <ul className="menu">
                    {/* <li><a href="#about">About</a></li> */}
                    {/* <li><a href="#skills">Skills</a></li> */}
                    <Link to="/"><li><a href="#">Home</a></li></Link>
                    <Link to="/experience"><li><a href="#">Studies & Experience</a></li></Link>
                    <Link to="/projects"><li><a href="#">Projects & Skills</a></li></Link>
                </ul>
                <div className="menu-btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    {/* </Router> */}
      { location.pathname != '/' ? <footer>
        <Footer/>
      </footer> : null}
    </>
  );

}

export default App;
