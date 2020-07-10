/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const videoStyle = css({
  width: '100%',
  height: '100%',
})

const emojiListStyle = css({
  bottom: 'calc(12%)',
  left: 'calc(25%)',
})

const emojiStyle = css({
  marginBottom: 'var(--global-spacing)',
})

const titleStyle = css({
  textAlign: 'right',
  top: '1rem',
  right: '1rem',
})

const hoverImageStyle = css({
  width: '50%',
})

const tagListStyle = css({
  textAlign: 'right',
  margin: '0',
  maxWidth: '7rem',
  bottom: 'calc(13.5%)',
  left: 'calc(7%)',
})

const dateStyle = css({
  top: 'calc(25%)',
  left: 'calc(19%)',
  // marginLeft: 'var(--global-spacing)',
  maxWidth: '2rem',
})

const JeanLouis = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.jeanLouis)) // deep copy of data

  return (
    <div className="flex">
      <div
        className="project-box relative flex centered"
        style={{
          background: active ? data.backgroundColor : 'inherit',
        }}
      >
        <img
          alt={`${data.title} illustration`}
          src={data.smallMedia}
          css={hoverImageStyle}
          className="hoverable"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        {active && (
          <React.Fragment>
            <ul className="tags flex float column" css={emojiListStyle}>
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
              {data.date}
            </h3>
            <h1 className="float project-title" css={titleStyle}>
              Jean-Louis<br></br>
              <span className="light">première classe</span>
            </h1>
          </React.Fragment>
        )}
      </div>
      <div className="project-box relative flex">
        <video
          id={`${data.title}-video`}
          loop
          autoPlay
          alt={`${data.title} video`}
          css={videoStyle}
        >
          <source src={data.largeMedia} type="video/mp4" />
          <source src={data.largeMedia} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div
          className="border-project"
          style={{
            borderTop: active ? `1rem solid ${data.backgroundColor}` : 'none',
            borderRight: active ? `1rem solid ${data.backgroundColor}` : 'none',
            borderBottom: active
              ? `1rem solid ${data.backgroundColor}`
              : 'none',
          }}
        ></div>
      </div>
    </div>
  )
}

export default JeanLouis
