import React, {Component} from 'react'
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

export default class HogCard extends Component {

  state = {
    clicked: false
  }

  onClick = () => this.setState({clicked: !this.state.clicked});

  render(){
    const {state, props, onClick} = this
    const { name } = props
    return (
      <div className="ui eight wide column" onClick={onClick}>
        {state.clicked ? <HogCardBack { ...props } /> : <HogCardFront name={name}/>}
      </div>
    )
  }



}
