import React from 'react'

export default function Filter(props){
  const {greasy, weightSort, weightToggle, greaseToggle} = props
  console.log(props)
  return(
  <nav className="filterWrapper">
    <button onClick={greaseToggle}>{greasy ? "SHOW ME ALL OF MY CHILDREN, REGARDLESS OF GREASINESS" : "SHOW ME ONLY THE MOST GREASED HOGS"}</button>
    <button onClick={weightToggle}>{weightSort ? "SORT MY HOGS BY NAME" : "SORT MY HOGS BY ROTUNDITY"}</button>
  </nav>
  )

}
