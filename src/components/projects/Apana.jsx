/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'
import LargeMedia from '../LargeMedia'

const emojiListStyle = css({
  top: '14%',
  right: '20%',
})

const emojiStyle = css({
  marginLeft: '1rem',
})

const titleStyle = css({
  textAlign: 'right',
  top: '1rem',
  right: '1rem',
})

const hoverImageStyle = css({
  width: '60%',
})

const tagListStyle = css({
  margin: '0',
  bottom: '19.5%',
  maxWidth: '7rem',
  left: '1rem',
  textAlign: 'right',
})

const dateStyle = css({
  bottom: '15%',
  right: '20%',
  textAlign: 'right',
})

const Apana = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.apana)) // deep copy of data

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? data.backgroundColor : 'inherit',
      }}
    >
      <div
        className="project-box relative flex centered"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img
          className="hoverable "
          alt={`${data.title} illustration`}
          src={data.smallMedia}
          css={hoverImageStyle}
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
              Apana
            </h1>
          </React.Fragment>
        )}
      </div>
      <LargeMedia data={data} active={active} video />
    </div>
  )
}

export default Apana
