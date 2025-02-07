import React from 'react'
import './Footer.css'

const Footer = () => {
  const linkedin_profile = "https://www.linkedin.com/in/christopher-ituma-a2631323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

  return (
    <div className='footer'>
      <p>Designed and Developed By <a href={linkedin_profile} target='_blank'> Christopher Ituma </a></p>
    </div>
  )
}

export default Footer