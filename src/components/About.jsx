import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = ({ mode }) => {

    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 800
        });
    })

    const handleIconClick = (iconName) => {
        if (iconName === "instagram") {
            let a = document.createElement('a');
            a.target = '_blank';
            a.href = "http://instagram.com/kushal__1212";
            a.click();
        }
        else if (iconName === "whatsapp") {
            let a = document.createElement('a');
            a.target = '_blank';
            a.href = "https://wa.me/919106884674";
            a.click();
        }
        else if (iconName === "linkedin") {
            let a = document.createElement('a');
            a.target = '_blank';
            a.href = "https://www.linkedin.com/in/kushal-majiwala-2aa025226/";
            a.click();
        }
        else if (iconName === "github") {
            let a = document.createElement('a');
            a.target = '_blank';
            a.href = "https://github.com/kushalmajiwala";
            a.click();
        }
    }

    return (
        <>
            <div className={`about-heading-container${mode}`}>
                <span className={`about-text${mode}`}>ABOUT</span>
            </div>
            <div className={`about-content-container${mode}`}>
                <div className={`about-inner-container${mode}`} data-aos="fade-up">
                    <h1 className={`about-diff-text${mode}`}>Kushal Majiwala</h1>
                    <div className={`about-content${mode}`}>
                        <p>My name is Kushal. I live in Surat. I am a full stack developer. I am a passionate learner. I have completed MSCIT from VNSGU. I have completed 6 months internship at Avinashi Ventures. I worked in Vuejs for frontend and .NET for backend during that time period. I worked on two projects in my internship.</p>
                        <p>I have worked in many frontend projects and deployed those projects on internet using cloudflare web service.</p>
                        <p>I also have expertise in AWS Lambda. I have also built many projects in ReactJS and I used Supabase as backend for database operations. </p>
                        <div className={`icons-container${mode}`}>
                            <p className={`about-icon${mode} instaIcon${mode}`} onClick={() => handleIconClick("instagram")}><i class="bi bi-instagram"></i></p>
                            <p className={`about-icon${mode} whaIcon${mode}`} onClick={() => handleIconClick("whatsapp")}><i class="bi bi-whatsapp"></i></p>
                            <p className={`about-icon${mode} linkIcon${mode}`} onClick={() => handleIconClick("linkedin")}><i class="bi bi-linkedin"></i></p>
                            <p className={`about-icon${mode} gitIcon${mode}`} onClick={() => handleIconClick("github")}><i class="bi bi-github"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;