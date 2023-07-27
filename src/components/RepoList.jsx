import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div className="repo" key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <p>{repo.description}</p>
          <div className="details">
            <label>Language:</label>
            <span>{repo.language}</span>
          </div>
          <div className="details">
            <label>Last Update:</label>
            <span>{repo.updated_at.slice(0, 10)}</span>
          </div>
          <div className="details">
            <label>Forks:</label>
            <span>{repo.forks}</span>
          </div>
          <div className="details">
            <label>Stars:</label>
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
