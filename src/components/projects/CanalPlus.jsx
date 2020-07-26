/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

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

const CanalPlus = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.canalPlus)) // deep copy of data

  return (
    <div className="flex">
      <div
        className="project-box relative flex centered"
        style={{
          background: active ? data.backgroundColor : 'inherit',
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img
          alt={`${data.title} illustration`}
          src={data.smallMedia}
          css={hoverImageStyle}
          className="hoverable"
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
              {data.title}
              <br></br>
              <span className="light">{data.subtitle}</span>
            </h1>
          </React.Fragment>
        )}
      </div>
      <div className="project-box relative flex">
        <img alt={`${data.title} illustration`} src={data.largeMedia} />
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

export default CanalPlus
