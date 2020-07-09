/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'

const videoStyle = css({
  width: '100%',
  height: '100%',
})

const emojiListStyle = css({
  bottom: '21%',
  right: 'calc(20% - 1.5rem - 1rem)',
})

const emojiStyle = css({
  marginBottom: '1rem',
})

const titleStyle = css({
  textAlign: 'left',
  top: '1rem',
  left: '1rem',
})

const hoverImageStyle = css({
  width: '60%',
})

const tagListStyle = css({
  margin: '0',
  bottom: '4%',
  maxWidth: '7rem',
  left: '24%',
  textAlign: 'left',
})

const dateStyle = css({
  top: '15%',
  left: '20%',
  textAlign: 'left',
})

const ElsachaTV = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.elsachatTv)) // deep copy of data

  return (
    <div
      className="flex"
      style={{
        backgroundColor: active ? data.backgroundColor : 'inherit',
      }}
    >
      <div className="project-box relative flex">
        <div
          className="border-project"
          style={{
            borderTop: active ? `1rem solid ${data.backgroundColor}` : 'none',
            borderLeft: active ? `1rem solid ${data.backgroundColor}` : 'none',
            borderBottom: active
              ? `1rem solid ${data.backgroundColor}`
              : 'none',
          }}
        ></div>
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
      </div>
      <div className="project-box relative flex centered">
        <img
          className="hoverable "
          alt={`${data.title} illustration`}
          src={data.smallMedia}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          css={hoverImageStyle}
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
    </div>
  )
}

export default ElsachaTV
