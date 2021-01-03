import React, { useState, useEffect } from "react";
import Component from "./RepositoryList.component";

export default (props) => {
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    if (!props.user) return;

    setRepositories(null);

    fetch(`https://api.github.com/users/${props.user}/repos`)
      .then((response) => response.json())
      .then((response) => setRepositories(response));
  }, [props.user]);

  if (!repositories) return <div>Waiting...</div>;

  return <Component repositories={repositories} />;
};
