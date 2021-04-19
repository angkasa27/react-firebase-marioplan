import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

export default function ProjectList({ data }) {
  return (
    <div className="project-list section">
      {data &&
        data.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary data={project} />
          </Link>
        ))}
    </div>
  );
}
