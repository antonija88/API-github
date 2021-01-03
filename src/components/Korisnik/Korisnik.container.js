import React, { useState, useEffect } from "react";
import Component from "./Korisnik.component";

export default (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!props.user) return;

    setUser(null);

    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => response.json())
      .then((response) => setUser(response));
  }, [props.user]);

  if (!user) return <div> </div>;

  return (
    <Component
      avatar={user.avatar_url}
      username={user.name}
      bio={user.bio}
      location={user.location}
    />
  );
};
