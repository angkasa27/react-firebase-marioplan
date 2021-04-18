import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function ProjectDetail(props) {
  const { project } = props;
  if (project)
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{project.title}</div>
            <p>{project.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <p>
                {"Posted by " +
                  project.authorFirstName +
                  " " +
                  project.authorLastName}
              </p>
              <p>2nd September, 2020</p>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="container center">
        <p>Loading project detail...</p>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects?.[id];
  return { project };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
