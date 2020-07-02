import React from 'react'

import NavigationIcon from './NavigationIcon'

const NavigationBar = () => {
  return (
    <div className="navigation-bar flex">
      <NavigationIcon
        content={'Machine à projets'}
        src={'machineaprojets.png'}
      />
      <NavigationIcon content={'Index'} src={'index.png'} />
      <NavigationIcon content={'A propos'} src={'apropos.png'} />
      <NavigationIcon content={'Contact'} src={'contact.png'} />
    </div>
  )
}

export default NavigationBar
