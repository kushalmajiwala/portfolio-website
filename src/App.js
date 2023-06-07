import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact'
import Project from './components/Project';
import { Tooltip } from 'primereact/tooltip';
import './style.css';

const App = () => {

  const [mode, setMode] = useState('');
  const [modeIcon, setModeIcon] = useState('bi bi-brightness-high');
  const [modeName, setModeName] = useState('Light Mode');

  useEffect(() => {
    const current_mode = localStorage.getItem("ModeName");
    if (current_mode === "-light") {
      setMode(current_mode);
      setModeIcon('bi bi-moon');
      setModeName("Dark Mode");
    }
  }, []);

  const changeMode = () => {
    if (modeIcon === "bi bi-brightness-high") {
      localStorage.setItem("ModeName", '-light');
      setModeIcon('bi bi-moon');
      setMode('-light');
      setModeName("Dark Mode");
    }
    else {
      localStorage.setItem("ModeName", '');
      setModeIcon('bi bi-brightness-high');
      setMode('');
      setModeName("Light Mode");
    }
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg nav-main-container${mode}`}>
        <div className="container-fluid">
          {/* eslint-disable-next-line */}
          <a className="navbar-brand" href="#home" style={{ width: '20%' }}><img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/my_portfolio.png' alt="no-image" className={`navbar-image${mode}`} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: '#bfbfbf' }}>
            <span className={`navbar-toggler-icon toggle-icon${mode}`} style={{ filter: 'invert(45%)' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-3 mb-lg-3 nav-container${mode}`}>
              <li className="nav-item mt-3">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" aria-current="page" href="#experience">Experience</a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" aria-current="page" href="#project">Projects</a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" aria-current="page" href="#contact">Contact</a>
              </li>
              <Tooltip target=".change-theme-text" className='change-theme-tip' />
              <li className='nav-item mt-3 change-theme-text' onClick={changeMode} data-pr-tooltip={modeName} data-pr-position='bottom'>
                {/* eslint-disable-next-line */}
                <a className="nav-link" aria-current="page"><i className={modeIcon}></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ display: 'inline' }}>
        <div id="home" className={`home-container${mode}`}>
          <Home mode={mode} />
        </div>
        <div id="about" className={`about-container${mode}`}>
          <About mode={mode} />
        </div>
        <div id="experience" className={`exp-container${mode}`}>
          <Experience mode={mode} />
        </div>
        <div id="project" className={`project-container${mode}`}>
          <Project mode={mode} />
        </div>
        <div id="contact" className={`contact-container${mode}`}>
          <Contact mode={mode} />
        </div>
      </div>
    </>
  )
}

export default App;