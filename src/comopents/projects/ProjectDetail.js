import React from "react";

export default function ProjectDetail(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Tilte - {id}</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            cupiditate. Molestiae debitis non, ea consequatur minima repellat
            laborum quos temporibus obcaecati alias laboriosam autem aspernatur
            fuga inventore aliquam, iusto hic?
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <p>Posted by Dimas Angkasa</p>
            <p>2nd September, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
