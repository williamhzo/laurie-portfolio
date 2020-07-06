import React, { useState } from 'react'

import projects from '../../data/projects'

const Lacoste = () => {
  const [active, setActive] = useState(true)
  const LACOSTE = JSON.parse(JSON.stringify(projects.lacoste)) // deep copy of data
  return (
    <div>
      <div className="project-box static ">
        {active && (
          <h1 className="float project-title">
            studio<br></br>prana
          </h1>
        )}

        <div
          className="border-project"
          style={{
            border: active ? `1.5rem solid var(--bg-studio-prana)` : 'none',
          }}
        ></div>
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_PRANA_1.png"
        />
      </div>
      <div
        className="project-container flex"
        style={{
          backgroundColor: active ? LACOSTE.backgroundColor : 'inherit',
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
                {LACOSTE.emojiTags.map((el, index) => (
                  <li className="emoji" key={index}>
                    {el}
                  </li>
                ))}
              </ul>
              <ul className="tags float project-tag-list">
                {LACOSTE.tags.map((el, index) => (
                  <li className="project-tag" key={index}>
                    {el}
                  </li>
                ))}
              </ul>
              <h3 className="project-date float">{LACOSTE.date}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Lacoste
