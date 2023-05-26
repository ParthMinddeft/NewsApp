import React, { Component } from 'react'
import Loading_icon from './Loading_icon.gif' 

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading_icon} alt='Loading_icon'></img>
      </div>
    )
  }
}

export default Spinner
