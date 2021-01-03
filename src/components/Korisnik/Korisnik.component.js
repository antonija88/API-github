import React from "react";

export default ({ avatar, username, bio, location }) => (
  <div className="row mt-3">
    <div className="col-md-3">
      <img src={avatar} alt={username} className="img-thumbnail" />
    </div>
    <div className="col-md-3">
      <div>{username}</div>
    </div>
    <div className="col-md-3">
      <div>{location}</div>
    </div>
    <div className="col-md-3">
      <div>{bio}</div>
    </div>
  </div>
);
