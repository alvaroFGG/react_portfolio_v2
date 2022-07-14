import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './Timeline.css';
import {experiences} from "../../info";

function Timeline() {
//    document.querySelector(".navbar").style.position = "static";
    // console.log(document.querySelector(".navbar").classList);
  return (
    
    <div className="experience">
    <h2 className="title">Studies & Experience</h2>
      <VerticalTimeline lineColor="#3e497a">

      {experiences.map((experience) =>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={experience.date}
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={experience.type == "studies" ? <SchoolIcon/> : <WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          {experience.name}
          </h3>
          <h4>{experience.description}</h4>
          {/* <p></p> */}
        </VerticalTimelineElement>
      )}
        

        
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;