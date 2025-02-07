import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="heading">
        <h1>Mood Pal</h1>
      </div>
      <div className="description">
        <p>How are you feeling today? </p>
        <p>Choose your mood, and let the perfect playlist set the tone! </p>
      </div>
    </div>
  )
}

export default Header