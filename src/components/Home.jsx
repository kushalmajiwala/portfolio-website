import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = ({ mode }) => {
    useEffect(() => {
        // eslint-disable-next-line
        var typed = new Typed('#element', {
            strings: ["ReactJS", "NodeJS", "VueJS", "Svelte"],
            loop: true,
            typeSpeed: 120,
            showCursor: false,
            backDelay: 2000
        });
    });

    const redirectGithub = () => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = "https://github.com/kushalmajiwala";
        a.click();
    }
    const downloadResume = () => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = "https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/KushalMajiwala's%20Resume.pdf";
        a.click();
    }
    return (
        <>
            <div className={`home-info-container${mode}`}>
                <div>
                    <p className={`home-info-text${mode}`}>Hi, My name is <span className={`home-diff-color${mode}`}>Kushal</span></p>
                    <p className={`home-info-text${mode}`}>and I am a passionate </p>
                    <p><span className={`home-info-text${mode} home-diff-color${mode}`} id='element'></span><span className={`home-info-text${mode}`}> Developer</span></p>
                    <div className={`home-btn-container${mode}`}>
                        <button className={`btn btn${mode}`} onClick={downloadResume}>Download Resume</button>
                        <button className={`btn btn${mode}`} onClick={redirectGithub}>Visit Github</button>
                    </div>
                </div>
            </div>
            <div className={`home-pic-container${mode}`}>
                {/* eslint-disable-next-line */}
                <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/developer.png' alt="no-image" className={`developer-image-home${mode}`} />
            </div>
        </>
    )
}
export default Home;
