import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#1E1A48' }}>
        <div class="container-fluid">
          {/* eslint-disable-next-line */}
          <a class="navbar-brand" href="#home" style={{ width: '20%', color: 'white' }}><img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/my_portfolio.png' alt="no-image" className="navbar-image" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
            <span class="navbar-toggler-icon" style={{ filter: 'invert(100%)' }}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-3 mb-lg-3 nav-container">
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
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" className="home-container">
        <Home/>
      </div>
      <div id="about" className="about-container">

      </div>
    </>
  )
}

export default App;