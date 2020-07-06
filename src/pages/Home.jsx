import React, { useState } from 'react'
// import ProjectLeft from '../components/projects/ProjectLeft'
// import ProjectRight from '../components/projects/ProjectRight'
import '../styles/_global.scss'
import projects from '../data/projects'

const Home = () => {
  const [active, setActive] = useState(true)
  var STUDIOPRANA = JSON.parse(JSON.stringify(projects.studioPrana)) // deep copy of data

  return (
    <div className="container">
      <div
        className="project-container flex"
        style={{
          backgroundColor: active ? `var(--bg-studio-prana)` : 'inherit',
        }}
      >
        <div className="project-box">
          {active && <h1 className='float project-title'>{STUDIOPRANA.title}</h1>}
          <img
            alt="studio prana illustration"
            src="./assets/projects/HOME_PRANA_2.jpg"
            className="project-image-small hoverable"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
          {active && (
            <ul className="tags flex float project-emojis">
              {STUDIOPRANA.emojiTags.map((el, index) => (
                <li className="emoji" key={index}>
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="project-box static ">
          <div
            className="border-project"
            style={{
              border: active ? `1.5rem solid var(--bg-studio-prana)` : 'none',
            }}
          ></div>
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
