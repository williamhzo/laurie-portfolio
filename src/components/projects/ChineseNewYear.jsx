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

const ChineseNewYear = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.chineseNewYear)) // deep copy of data

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
              <span className="light">happy</span>
              <br></br>chinese<br></br>new year
            </h1>
          </React.Fragment>
        )}
      </div>
      <div className="project-box relative flex">
        <img alt={`${data.title} illustration`} src={data.largeMedia} />
        <div
          className="border-project"
          style={{
            borderTop: active ? `1rem solid` : 'none',
            borderRight: active ? `1rem solid` : 'none',
            borderBottom: active ? `1rem solid` : 'none',
            borderImageSource:
              'linear-gradient(104deg, rgb(88, 88, 86) 0%,rgb(156, 154, 154) 25%, rgb(217, 216, 216) 50%, rgb(156, 154, 154) 75%, rgb(88, 88, 86) 100%)',
            borderImageSlice: '1',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ChineseNewYear
