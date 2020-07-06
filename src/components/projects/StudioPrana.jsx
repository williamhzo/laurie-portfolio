/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const StudioPrana = () => {
  const [active, setActive] = useState(false)
  const STUDIOPRANA = JSON.parse(JSON.stringify(projects.studioPrana)) // deep copy of data

  const emojiListStyle = css({
    top: '-4rem',
  })

  const emojiStyle = css({
    marginRight: '1rem',
  })

  const titleStyle = css({
    textAlign: 'right',
    top: '0',
    left: '-4.75rem',
  })

  const hoverImageStyle = css({
    width: '50%',
  })

  const tagListStyle = css({
    margin: '0',
    bottom: '0',
    maxWidth: '7rem',
    left: 'calc(50% + 1rem)',
  })

  const dateStyle = css({
    bottom: '-3.75rem',
  })

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? STUDIOPRANA.backgroundColor : 'inherit',
      }}
    >
      <div className="project-box relative flex">
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_PRANA_2.jpg"
          css={hoverImageStyle}
          className="hoverable"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        {active && (
          <React.Fragment>
            <ul className="tags flex float" css={emojiListStyle}>
              {STUDIOPRANA.emojiTags.map((el, index) => (
                <li className="emoji" css={emojiStyle} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className="tags float" css={tagListStyle}>
              {STUDIOPRANA.tags.map((el, index) => (
                <li className="project-tag" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3 className="project-date float" css={dateStyle}>
              {STUDIOPRANA.date}
            </h3>
          </React.Fragment>
        )}
      </div>
      <div className="project-box relative static flex">
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_PRANA_1.png"
        />
        {active && (
          <h1 className="float project-title" css={titleStyle}>
            studio<br></br>prana
          </h1>
        )}

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
