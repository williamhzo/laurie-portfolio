/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const emojiListStyle = css({
  top: '-4rem',
  right: '7.5rem',
})

const emojiStyle = css({
  marginLeft: '1rem',
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
  maxWidth: '7rem',
  left: '1rem',
  textAlign: 'right',
})

const dateStyle = css({
  bottom: '-4.5rem',
  right: '7.5rem',
  textAlign: 'right',
})

const Lacoste = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.lacoste)) // deep copy of data

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? data.backgroundColor : 'inherit',
      }}
    >
      <div className="project-box relative static flex">
        <img alt="studio prana illustration" src={data.largeMedia} />
        {active && (
          <h1 className="float project-title" css={titleStyle}>
            {data.title}
          </h1>
        )}

        <div
          className="border-project"
          style={{
            border: active ? `1.5rem solid ${data.backgroundColor}` : 'none',
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
          <source src={data.smallMedia} type="video/mp4" />
          <source src={data.smallMedia} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        {active && (
          <React.Fragment>
            <ul className="tags flex float" css={emojiListStyle}>
              {data.emojiTags.map((el, index) => (
                <li className="emoji" css={emojiStyle} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className="tags float" css={tagListStyle}>
              {data.tags.map((el, index) => (
                <li className="project-tag" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3 className="project-date float" css={dateStyle}>
              {data.subtitle}
              <br></br>
              {data.date}
            </h3>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Lacoste
