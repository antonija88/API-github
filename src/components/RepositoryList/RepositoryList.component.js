import React from "react";
import RepositoryListItem from "./RepositoryListItem.component";

export default ({ repositories }) => (
  <div>
  <hr/>
  <h4>Respositories: </h4>
  <ul className="list-group">
    {repositories.map((repository) => (
      <RepositoryListItem key={repository.id}>
        {repository.name}
      </RepositoryListItem>
    ))}
  </ul>
  </div>
);
