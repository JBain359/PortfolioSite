import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className={props.class}>
      <img src={props.imgSource} alt="thumbnail image" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      {props.links.map((link) => {
        return (
          <a href={link.href} target="_blank">
            {link.name}
          </a>
        );
      })}
      {props.children}
    </div>
  );
};

export default ProjectCard;
