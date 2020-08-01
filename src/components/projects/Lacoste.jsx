/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

import projects from '../../data/projects'
import LargeMediaLeft from '../LargeMediaLeft'

const relativeWrapper = css`
  width: 60%;
`

const emojiWrapper = css`
  top: calc(-1.5rem - 1rem);
  width: 100%;
`

const emojiStyle = css`
  margin-left: 1rem;
`

const titleStyle = css`
  text-align: right;
  top: 1rem;
  left: 1rem;
`

const hoverImageStyle = css`
  width: 100%;
`

const tagsWrapper = css`
  height: 100%;
  left: calc(-7rem - 1rem);
`

const tagListStyle = css`
  margin: 0;
  width: 7rem;
  text-align: right;
`

const dateWrapper = css`
  width: 100%;
  bottom: calc(-45px - 1rem);
`

const dateStyle = css`
  text-align: right;
`

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
      <div
        className="project-box relative flex centered"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {active && (
          <h1 className="float project-title" css={titleStyle}>
            {data.title}
          </h1>
        )}
        <div css={relativeWrapper} className="relative flex centered">
          <video
            id="lacoste-video"
            className="hoverable"
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
              <div className="flex end float" css={emojiWrapper}>
                <ul className="tags flex">
                  {data.emojiTags.map((el, index) => (
                    <li className="emoji" css={emojiStyle} key={index}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div css={tagsWrapper} className="flex column end float">
                <ul className="tags" css={tagListStyle}>
                  {data.tags.map((el, index) => (
                    <li className="project-tag" key={index}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex end float" css={dateWrapper}>
                <h3 className="project-date" css={dateStyle}>
                  {data.subtitle}
                  <br></br>
                  {data.date}
                </h3>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Lacoste
