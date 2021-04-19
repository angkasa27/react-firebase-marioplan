import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

function ProjectDetail(props) {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

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
              {moment(project.createAt.toDate()).calendar()}
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
  return { project, auth: state.firebase.auth };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
