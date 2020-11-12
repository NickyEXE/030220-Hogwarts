import React from 'react'
import HogCard from '../components/HogCard'

export default function HogsContainer (props) {
  const renderHogs = () => props.hogs.map(hog => <HogCard {...hog} key={hog.name} />)
  return(
    <div className="ui grid container">
      {renderHogs()}
    </div>
  )
}
