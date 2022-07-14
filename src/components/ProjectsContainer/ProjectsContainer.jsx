import React from 'react';
import uniqid from 'uniqid';
import './ProjectsContainer.css';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectsContainer({project}) {
  console.log(project);
  return (
    
    <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target = '_blank'
      >
        <GitHubIcon />
      </a>
    )}
  </div>
  )
}

export default ProjectsContainer