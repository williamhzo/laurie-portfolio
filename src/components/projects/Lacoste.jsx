/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const Lacoste = () => {
  const [active, setActive] = useState(true)
  const LACOSTE = JSON.parse(JSON.stringify(projects.lacoste)) // deep copy of data

  const emojiListStyle = css({
    top: '-4rem',
    right: '25%',
  })

  const emojiStyle = css({
    marginRight: '1rem',
  })

  const titleStyle = css({
    textAlign: 'right',
    top: '1rem',
    right: '-6.75rem',
  })

  const hoverImageStyle = css({
    width: '60%',
  })

  const tagListStyle = css({
    margin: '0',
    bottom: '0',
    maxWidth: '6rem',
    left: 'calc(50% + 1rem)',
  })

  const dateStyle = css({
    bottom: '-3.75rem',
  })

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? LACOSTE.backgroundColor : 'inherit',
      }}
    >
      <div className="project-box relative static flex">
        <img
          alt="studio prana illustration"
          src="./assets/projects/HOME_LACOSTE_1.png"
        />
        {active && (
          <h1 className="float project-title" css={titleStyle}>
            {LACOSTE.title}
          </h1>
        )}

        <div
          className="border-project"
          style={{
            border: active ? `1.5rem solid ${LACOSTE.backgroundColor}` : 'none',
          }}
        ></div>
      </div>
      <div className="project-box relative flex centered">
        <video
          id="lacoste-video"
          className="hoverable "
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          loop
          autoPlay
          css={hoverImageStyle}
        >
          <source src="./assets/projects/HOME_LACOSTE_2.mp4" type="video/mp4" />
          <source src="./assets/projects/HOME_LACOSTE_2.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        {active && (
          <React.Fragment>
            <ul className="tags flex float" css={emojiListStyle}>
              {LACOSTE.emojiTags.map((el, index) => (
                <li className="emoji" css={emojiStyle} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className="tags float" css={tagListStyle}>
              {LACOSTE.tags.map((el, index) => (
                <li className="project-tag" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3 className="project-date float" css={dateStyle}>
              {LACOSTE.date}
            </h3>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Lacoste
