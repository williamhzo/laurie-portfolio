/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const smallContainer = css({})

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

const ChineseNewYear = () => {
  const [active, setActive] = useState(true)
  const data = JSON.parse(JSON.stringify(projects.chineseNewYear)) // deep copy of data

  return (
    <div className="flex">
      <div
        css={smallContainer}
        className="project-box relative flex"
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
              {data.date}
            </h3>
          </React.Fragment>
        )}
      </div>
      <div className="project-box relative static flex">
        <img alt={`${data.title} illustration`} src={data.largeMedia} />
        {active && (
          <h1 className="float project-title" css={titleStyle}>
            studio<br></br>prana
          </h1>
        )}
        <div
          className="border-project"
          style={{
            // background: active ? `${data.backgroundColor}` : 'none',
            border: active ? `1.5rem solid rgb(88, 88, 86)` : 'none',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ChineseNewYear
