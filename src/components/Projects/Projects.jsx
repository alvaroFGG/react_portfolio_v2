import React from 'react';
import {projects} from '../../info';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import uniqid from 'uniqid';
import './Projects.css';
import Skills from '../Skills/Skills';

function Projects() {
    if(!projects.length) return null;
    // console.log(projects);
    return (
        <>
            <section className='projects'>
                <h3>Most important projects</h3>
                <div className='projects__grid'>
                    {projects.map((project) => (
                    <ProjectsContainer key={uniqid()} project={project} />
                    ))}
                </div>
            </section>

            <section>
                <Skills/>
            </section>
        </>
    )
}

export default Projects