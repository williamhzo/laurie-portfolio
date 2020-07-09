import React from 'react'

import NavigationIcon from './NavigationIcon'
import ContactCard from './ContactCard'

const NavigationBar = () => {
  const indexParagraph = <p>this is the index</p>
  const aProposParagraph = (
    <React.Fragment>
      <p>
        Je suis designer pluridisciplinaire, axée sur la conception graphique,
        l'illustration et le set design. Freelance, 'joeuvre entre Paris,
        Bordeaux et Orléans.
      </p>
      <p>
        Je crois, aux pouvoirs de l'image, à l'audace, aux détails, à la
        singularité et à la puissance de la couleur. Curieuse de réflexion sur
        la quotidien et en veille constante sur toute l'imagerie design, cela
        permet de me réinventer sans cesse.
      </p>
      <p>
        Je reste à l'écoute pour toute proposition de collaboration créative!
      </p>
    </React.Fragment>
  )
  const ContactParagraph = <ContactCard />

  return (
    <div className="navigation-bar flex">
      <NavigationIcon
        content={'Machine à projets'}
        src={'machineaprojets.png'}
      />
      <NavigationIcon
        content={'Index'}
        paragraph={indexParagraph}
        src={'index.png'}
      />
      <NavigationIcon
        content={'A propos'}
        paragraph={aProposParagraph}
        src={'apropos.png'}
      />
      <NavigationIcon
        content={'Contact'}
        paragraph={ContactParagraph}
        src={'contact.png'}
      />
    </div>
  )
}

export default NavigationBar
