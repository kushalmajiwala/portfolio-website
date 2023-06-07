import React from 'react'
import { useState, useEffect } from 'react';
import AllProject from './projectapi';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tooltip } from 'primereact/tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Project = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        setProjectData(AllProject);
    }, [])

    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 800
        });
    });

    const handleViewButtonClick = (project_url) => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = project_url;
        a.click();
    }

    const ProjectCard = (project) => {
        return (
            <>
                <div className="project-card-container">
                    <div className="project-card-inner-container"  data-aos="fade-up">
                        <div className='project-pic-container'>
                            <img className="project-image" src={`${project.image}`} alt={project.name} />
                        </div>
                        <div className="project-desc-container">
                            <div className="project-desc">
                                <div className='project-name-btn-container'>
                                    <div className="project-name">{project.name}</div>
                                    <div className="visit-button-container">
                                        <Tooltip target=".visit-btn">
                                            View Project
                                        </Tooltip>
                                        <Button icon="pi pi-eye" className="p-button-rounded visit-btn" data-pr-position='left' onClick={() => handleViewButtonClick(project.link)}></Button>
                                    </div>
                                </div>
                                <Rating value={project.star} readOnly cancel={false} className="project-rating"></Rating>
                                <div className="project-desc">
                                    <span>{project.desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='project-heading-container'>
                <span className='project-text'>PROJECTS</span>
            </div>
            <div className='project-content-container'>
                <DataView value={projectData} itemTemplate={ProjectCard} style={{ border:'none' }} />
            </div>
        </>
    )
}

export default Project;
