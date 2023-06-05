import React from 'react'
import '../style.css';

export const About = () => {
    return (
        <>
            <div className='about-heading-container'>
                <span className='about-text'>ABOUT</span>
            </div>
            <div className='about-content-container'>
                <h1 style={{ marginLeft: '-3%' }}>Kushal Majiwala</h1>
                <div className='about-content'>
                    <p>My name is Kushal. I live in Surat. I am a full stack developer. I am a passionate learner. I have completed MSCIT from VNSGU. I have completed 6 months internship in Avinashi Ventures. I worked in Vuejs for frontend and .NET for backend during that time period. I worked on two projects in my internship.</p>
                    <p>I have worked in many frontend projects and deployed those projects on internet using cloudflare web service.</p>
                    <p>I also have expertise in AWS Lambda. I have also built many projects in ReactJS and I used Supabase as backend for database operations. </p>
                    <div className='icons-container'>
                        <p className='about-icon'><i class="bi bi-instagram"></i></p>
                        <p className='about-icon'><i class="bi bi-whatsapp"></i></p>
                        <p className='about-icon'><i class="bi bi-linkedin"></i></p>
                        <p className='about-icon'><i class="bi bi-github"></i></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;