/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'
import LargeMediaRight from '../LargeMediaRight'

const emojiListStyle = css({
  top: 'calc(25% - 1.5rem - 1rem)',
  marginLeft: 'var(--global-spacing)',
})

const emojiStyle = css({
  marginRight: 'var(--global-spacing)',
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
  margin: '0',
  bottom: '25%',
  maxWidth: '7rem',
  left: 'calc(50% + 1rem)',
})

const dateStyle = css({
  bottom: 'calc(25% - 1rem - 1rem)',
  marginLeft: 'var(--global-spacing)',
})

const StudioPrana = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.studioPrana)) // deep copy of data

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? data.backgroundColor : 'inherit',
      }}
    >
      <div
        className="project-box relative flex"
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
            <h1 className="float project-title" css={titleStyle}>
              studio<br></br>prana
            </h1>
          </React.Fragment>
        )}
      </div>
      <LargeMediaRight data={data} active={active} />
    </div>
  )
}

export default StudioPrana
