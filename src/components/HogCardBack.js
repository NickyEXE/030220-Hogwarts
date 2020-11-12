import React from 'react'

export default function HogCardBack (props) {
  console.log(props)
  const { name, greased, specialty, weight } = props

  const pigImageStub = require("../hog-imgs/" + name
    .toLowerCase()
    .split(" ")
    .join("_") + ".jpg")

  return(
    <div className="pigTile">
      <div className="back">
        <h3>{name}</h3>
        <p className="hoggyText"><strong>Is this hog greased:</strong> {greased ? "Yes!!!!! ♥🐽♥" : "No 😿" }</p>
        <p className="achievementText"><strong>Highest Medal Achieved:</strong>  {props["highest medal achieved"]}</p>
        <p className="achievementText"><strong>Specialty:</strong> {specialty}</p>
        <p className="subtleText"><strong>Weight as a ratio of pig to an LG something or other refridgerator:</strong> {weight}</p>

      </div>
    </div>
  )
}
