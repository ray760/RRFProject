import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-detais">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            dolor quam. Quos provident esse eius ipsam quis magni cupiditate
            cumque soluta obcaecati cum. Deleniti, esse eum! Maxime possimus
            ipsum perferendis.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
