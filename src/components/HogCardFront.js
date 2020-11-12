import React from 'react'

export default function HogCardFront (props) {

  const pigImageStub = require("../hog-imgs/" + props.name
    .toLowerCase()
    .split(" ")
    .join("_") + ".jpg")

  return(
    <div className="pigTile">
      <h3>{props.name}</h3>
      <img src={pigImageStub} alt={props.name}/>
    </div>
  )
}
