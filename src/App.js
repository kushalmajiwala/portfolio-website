import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact'
import Project from './components/Project';
import './style.css';

const App = () => {

  const [mode, setMode] = useState('');
  const [modeIcon, setModeIcon] = useState('bi bi-brightness-high');

  const changeMode = () => {
    if (modeIcon === "bi bi-brightness-high") {
      setModeIcon('bi bi-moon');
      setMode('-light');
    }
    else {
      setModeIcon('bi bi-brightness-high');
      setMode('');
    }
  }

  return (
    <>
      <nav class={`navbar navbar-expand-lg nav-main-container${mode}`}>
        <div class="container-fluid">
          {/* eslint-disable-next-line */}
          <a class="navbar-brand" href="#home" style={{ width: '20%' }}><img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/my_portfolio.png' alt="no-image" className={`navbar-image${mode}`} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
            <span class="navbar-toggler-icon" style={{ filter: 'invert(100%)' }}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class={`navbar-nav me-auto mb-3 mb-lg-3 nav-container${mode}`}>
              <li class="nav-item mt-3">
                <a class="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item mt-3">
                <a class="nav-link" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item mt-3">
                <a class="nav-link" aria-current="page" href="#experience">Experience</a>
              </li>
              <li class="nav-item mt-3">
                <a class="nav-link" aria-current="page" href="#project">Projects</a>
              </li>
              <li class="nav-item mt-3">
                <a class="nav-link" aria-current="page" href="#contact">Contact</a>
              </li>
              <li className='nav-item mt-3' onClick={changeMode}>
                {/* eslint-disable-next-line */}
                <a class="nav-link" aria-current="page"><i class={modeIcon}></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ display: 'inline' }}>
        <div id="home" className={`home-container${mode}`}>
          <Home mode={mode}/>
        </div>
        <div id="about" className={`about-container${mode}`}>
          <About mode={mode}/>
        </div>
        <div id="experience" className={`exp-container${mode}`}>
          <Experience mode={mode}/>
        </div>
        <div id="project" className={`project-container${mode}`}>
          <Project mode={mode}/>
        </div>
        <div id="contact" className={`contact-container${mode}`}>
          <Contact mode={mode}/>
        </div>
      </div>
    </>
  )
}

export default App;