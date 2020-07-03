import React, { useState } from 'react'
// import ProjectLeft from '../components/projects/ProjectLeft'
// import ProjectRight from '../components/projects/ProjectRight'
import '../styles/_global.scss'

const Home = () => {
  // const setBackground = () => {
  //   // onMouseEnter
  // }

  // const removeBackground = () => {
  //   // onMouseLeave
  // }

  const [active, setActive] = useState(false)

  return (
    <div className="container">
      {/* <ProjectLeft />
      <ProjectRight src={'./assets/projects/HOME_PRANA_1.png'}/> */}
      <div className="project-container flex">
        <div
          className="project-box flex"
          style={{
            backgroundColor: active ? `var(--bg-studio-parana)` : 'inherit',
          }}
        >
          <img
            alt="studio prana illustration"
            src="./assets/projects/HOME_PRANA_2.jpg"
            className="project-image-small hoverable"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        </div>
        <div className="project-box static">
          <img
            alt="studio prana illustration"
            src="./assets/projects/HOME_PRANA_1.png"
            className="project-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
