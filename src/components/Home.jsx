import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../style.css';

const Home = () => {
    useEffect(() => {
        // eslint-disable-next-line
        var typed = new Typed('#element', {
            strings: ["ReactJS", "NodeJS", "VueJS", "Svelte"],
            loop: true,
            typeSpeed: 120,
            showCursor: false,
            backDelay: 2000
        });
    })

    const redirectGithub = () => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = "https://github.com/kushalmajiwala";
        a.click();
    }
    const downloadResume = () => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = "https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/Kushal's%20Resume.pdf";
        a.click();
    }
    return (
        <>
            <div className='home-info-container'>
                <div>
                    <p className='home-info-text'>Hi, My name is <span style={{ color: '#9768d1' }}>Kushal</span></p>
                    <p className='home-info-text'>and I am a passionate </p>
                    <p><span className='home-info-text' id='element' style={{ color: '#9768d1' }}></span><span className='home-info-text'> Developer</span></p>
                    <div className="home-btn-container">
                        <button className='btn' onClick={downloadResume}>Download Resume</button>
                        <button className='btn' onClick={redirectGithub}>Visit Github</button>
                    </div>
                </div>
            </div>
            <div className='home-pic-container'>
                {/* eslint-disable-next-line */}
                <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/developer.png' alt="no-image" className='developer-image' />
            </div>
        </>
    )
}
export default Home;