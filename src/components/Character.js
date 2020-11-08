import React from "react";

function Character(props) {
  return (
    <div class="card m-2" style={{ width: "18rem" }}>
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.status}</p>
        <a href="#" class="btn btn-success">
          View More
        </a>
      </div>
    </div>
  );
}

export default Character;
