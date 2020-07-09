/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'
import LargeMediaLeft from '../LargeMediaLeft'

const emojiListStyle = css({
  top: '13%',
  right: '20%',
})

const emojiStyle = css({
  marginLeft: '1rem',
})

const titleStyle = css({
  textAlign: 'right',
  top: '1rem',
  left: '1rem',
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
  bottom: '13%',
  right: '20%',
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
      <LargeMediaLeft data={data} active={active} />
      <div className="project-box relative flex centered">
        <video
          id="lacoste-video"
          className="hoverable "
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          loop
          autoPlay
          css={hoverImageStyle}
          alt={`${data.title} illustration`}
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
            <h1 className="float project-title" css={titleStyle}>
              {data.title}
            </h1>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Lacoste
