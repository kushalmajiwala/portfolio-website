import React, { useEffect } from 'react'
import { Tooltip } from 'primereact/tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = ({ mode }) => {

    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 800,
            once: true
        });
    });

    return (
        <>
            <div className={`exp-heading-container${mode}`}>
                <span className={`exp-text${mode}`}>EXPERIENCE</span>
            </div>
            <div className={`exp-content-container${mode}`}>
                <div className={`exp-pic-container${mode}`}>
                    {/* eslint-disable-next-line */}
                    <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/work_experience.png' alt="no-image" className={`developer-image-exp${mode}`} />
                </div>
                <div className={`exp-info-container${mode}`}>
                    <div className={`exp-info-main-container${mode}`} data-aos="fade-up">
                        <h2 className={`exp-diff-text${mode}`}>FULL STACK DEVELOPER</h2>
                        <div className={`exp-content${mode}`}>
                            <p>I have completed 6 months internship at Avinashi Ventures.Where I worked as full stack developer.
                                I used different technologies like VueJS, ReactJS, Svelte, .Net, NodeJS in that time period.
                                I completed two project in my internship.
                            </p>
                        </div>
                        <div className={`skill-container${mode}`}>
                            <p className={`skill-name${mode}`}>ReactJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target={`.reactSkill${mode}`} />
                                <p style={{ display: 'flex' }}><p className={`skill-percent${mode} reactSkill${mode}`} data-pr-tooltip="90%" data-pr-position="top" data-pr-at="right top"></p><p className={`total-skill-percent${mode} totalReactSkill${mode}`}></p></p>
                            </div>
                            <p cpName='skill-name'>VueJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target={`.vueSkill${mode}`} />
                                <p style={{ display: 'flex' }}><p className={`skill-percent${mode} vueSkill${mode}`} data-pr-tooltip="70%" data-pr-position="top" data-pr-at="right top"></p><p className={`total-skill-percent${mode} totalVueSkill${mode}`}></p></p>
                            </div>
                            <p className='skill-name'>NodeJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target={`.nodeSkill${mode}`} />
                                <p style={{ display: 'flex' }}><p className={`skill-percent${mode} nodeSkill${mode}`} data-pr-tooltip="80%" data-pr-position="top" data-pr-at="right top"></p><p className={`total-skill-percent${mode} totalNodeSkill${mode}`}></p></p>
                            </div>
                            <p className='skill-name'>Java</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target={`.javaSkill${mode}`} />
                                <p style={{ display: 'flex' }}><p className={`skill-percent${mode} javaSkill${mode}`} data-pr-tooltip="60%" data-pr-position="top" data-pr-at="right top"></p><p className={`total-skill-percent${mode} totalJavaSkill${mode}`}></p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
