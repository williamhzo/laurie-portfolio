import React from 'react'

import '../styles/_variables.scss'

const StudioPrana = () => {
  return (
    <div className="flex">
      <div className="strip studio-prana">
        <h1>
          Studio<br></br>Prana
        </h1>
        <h3>2020</h3>
        <hr></hr>
        <p className="light">
          De l'énergie à la sérénité!<br></br>Tout nouveau studio de caching sur
          Orléans, le Studio Prana désire mettre en avant ses multiples domaines
          d'activités, opposés mais surtout complémentaires. Le tout, à l'image
          de ses deux protagonistes : jeunes féminines, douces mais dynamiques.
        </p>
        <p>
          Conception, réalisation de l'identité visuelle, des supports print et
          d'une série de visuels. Création d'une police spécialisée et
          d'illustrations.
        </p>
        <hr />
        <div className="tags flex">
          <span role="img" aria-label="tag emoji" className="emoji hoverable">
            💡
          </span>
          <span role="img" aria-label="tag emoji" className="emoji hoverable">
            👶🏻
          </span>
          <span role="img" aria-label="tag emoji" className="emoji hoverable">
            💬
          </span>
          <span role="img" aria-label="tag emoji" className="emoji hoverable">
            🖍
          </span>
          <span role="img" aria-label="tag emoji" className="emoji hoverable">
            🖋
          </span>
        </div>
      </div>
      <div
        style={{ height: '50vh' }}
        className="project-detail studio-prana"
      ></div>
    </div>
  )
}

export default StudioPrana
