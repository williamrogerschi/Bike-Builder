import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import './footer.css'

const Footer = () => {
  const footerStyle = {
  }
    
  return (
    <div className="footer" style={footerStyle}>
        <div className="inner-footer">
        <div className="billy" style={{padding: '20px', margin: '20px'}}>
          <a href="https://www.linkedin.com/in/billy-rogers-chi/" target="_blank"className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "rgb(62, 59, 59)", padding: '0px 20px 0 20px' }}
            />
          </a>
          <a href="https://github.com/williamrogerschi" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "rgb(62, 59, 59)", padding: '0px 20px 0px 20px' }}
            />
          </a>
          <a className="footer-list" href="#">Contact</a>
        </div>
        </div>
    </div>

  )
}

export default Footer