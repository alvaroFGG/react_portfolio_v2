import React from 'react';
import {aboutMe} from "../../info";
import "./Footer.css";
import { LinkedIn, GitHub } from '@mui/icons-material';

function Footer() {
  return (
    <>
        {/* <h4>Developed by: {aboutMe.name}</h4>
        <div className='footer__social'>
            <h4>Find me at:</h4>
            <ul>
                <li><a href=''><GitHub/></a></li>
                <li><a href=''><LinkedIn/></a></li>
            </ul>
        </div>
        <p>@Copyright 2022 Álvaro Fuentenebro</p> */}

        <p>@Copyright 2022 Álvaro Fuentenebro</p>
        <h4>Find me at:</h4>
        <a><LinkedIn/></a>
        <a><GitHub/></a>
    </>
  )
}

export default Footer