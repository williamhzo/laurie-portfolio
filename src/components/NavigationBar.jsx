import React from 'react'
import tippy from 'tippy.js'

const NavigationBar = () => {
  return (
    <div className="navigation-bar flex">
      <div className="navigation-icon hoverable">
        <img className="emoji" src="../assets/machineaprojets.png" alt="" />
      </div>
      <div className="navigation-icon hoverable">
        <img className="emoji" src="../assets/index.png" alt="" />
      </div>
      <div className="navigation-icon hoverable">
        <img className="emoji" src="../assets/apropos.png" alt="" />
      </div>
      <div className="navigation-icon hoverable">
        <img className="emoji" src="../assets/contact.png" alt="" />
      </div>
    </div>
  )
}

export default NavigationBar
