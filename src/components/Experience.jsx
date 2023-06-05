import React from 'react'
import { Tooltip } from 'primereact/tooltip';


const Experience = () => {
    return (
        <>
            <div className='exp-heading-container'>
                <span className='exp-text'>EXPERIENCE</span>
            </div>
            <div className='exp-content-container'>
                <div className='exp-pic-container'>
                    {/* eslint-disable-next-line */}
                    <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/work_experience.png' alt="no-image" className='developer-image-exp' />
                </div>
                <div className='exp-info-container'>
                    <div>
                        <h1 style={{ color: '#f77a52' }}>FULL STACK DEVELOPER</h1>
                        <div className='exp-content'>
                            <p>I have completed 6 months internship at Avinashi Ventures.Where I worked as full stack developer.
                                I used different technologies like VueJS, ReactJS, Svelte, .Net, NodeJS in that time period.
                                I completed two project in my internship.
                            </p>
                        </div>
                        <div className='skill-container'>
                            <p className='skill-name'>ReactJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target=".reactSkill" />
                                <p style={{ display: 'flex' }}><p className='skill-percent reactSkill' data-pr-tooltip="90%" data-pr-position="top" data-pr-at="right top"></p><p className='total-skill-percent totalReactSkill'></p></p>
                            </div>
                            <p cpName='skill-name'>VueJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target=".vueSkill" />
                                <p style={{ display: 'flex' }}><p className='skill-percent vueSkill' data-pr-tooltip="70%" data-pr-position="top" data-pr-at="right top"></p><p className='total-skill-percent totalVueSkill'></p></p>
                            </div>
                            <p className='skill-name'>NodeJS</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target=".nodeSkill" />
                                <p style={{ display: 'flex' }}><p className='skill-percent nodeSkill' data-pr-tooltip="80%" data-pr-position="top" data-pr-at="right top"></p><p className='total-skill-percent totalNodeSkill'></p></p>
                            </div>
                            <p className='skill-name'>Java</p>
                            <div style={{ width: '90%' }}>
                                <Tooltip target=".javaSkill" />
                                <p style={{ display: 'flex' }}><p className='skill-percent javaSkill' data-pr-tooltip="60%" data-pr-position="top" data-pr-at="right top"></p><p className='total-skill-percent totalJavaSkill'></p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
