import React from "react";
import ProjectSummary from "./ProjectSummary";

export default function ProjectList({ data }) {
  return (
    <div className="project-list section">
      {data &&
        data.map((project) => (
          <ProjectSummary data={project} key={project.id} />
        ))}
    </div>
  );
}
