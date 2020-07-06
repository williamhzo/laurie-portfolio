import React, { useState } from 'react'

import projects from '../../data/projects'

const StudioPrana = () => {
  const [active, setActive] = useState(false)
  const STUDIOPRANA = JSON.parse(JSON.stringify(projects.studioPrana)) // deep copy of data

  return (
    <div
      className="project-container flex"
      style={{
        backgroundColor: active ? STUDIOPRANA.backgroundColor : 'inherit',
      }}
    >
      <div className="project-box flex">
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_PRANA_2.jpg"
          className="hoverable"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        {active && (
          <>
            <ul className="tags flex float project-emojis">
              {STUDIOPRANA.emojiTags.map((el, index) => (
                <li className="emoji" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className="tags float project-tag-list">
              {STUDIOPRANA.tags.map((el, index) => (
                <li className="project-tag" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3 className="project-date float">{STUDIOPRANA.date}</h3>
          </>
        )}
      </div>
      <div className="project-box static ">
        {active && (
          <h1 className="float project-title">
            studio<br></br>prana
          </h1>
        )}
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_PRANA_1.png"
        />
        <div
          className="border-project"
          style={{
            border: active ? `1.5rem solid var(--bg-studio-prana)` : 'none',
          }}
        ></div>
      </div>
    </div>
  )
}

export default StudioPrana
