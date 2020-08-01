/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import projects from '../../data/projects'
import LargeMediaRight from '../LargeMediaRight'

const relativeWrapper = css`
  width: 50%;
`

const emojiWrapper = css`
  top: calc(-1.5rem - 1rem);
  width: 100%;
  padding-left: 1rem;
`

const emojiStyle = css`
  margin-right: 1rem;
`

const titleStyle = css`
  text-align: right;
  top: 1rem;
  right: 1rem;
`

const hoverImageStyle = css`
  width: 100%;
`

const tagsWrapper = css`
  height: 100%;
  right: calc(-7rem - 1rem);
`

const tagListStyle = css`
  margin: 0;
  width: 7rem;
`

const dateWrapper = css`
  width: 100%;
  bottom: calc(-1rem - 1.5rem);
`

const dateStyle = css`
  margin-left: 1rem;
`

const StudioPrana = () => {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.studioPrana))

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
        <Link className="cursor-cursor" exact to={'/studio-prana'}>
          {active && (
            <h1 className="float project-title" css={titleStyle}>
              studio<br></br>prana
            </h1>
          )}
          <div css={relativeWrapper} className="relative flex centered">
            <img
              alt={`${data.title} illustration`}
              src={data.smallMedia}
              css={hoverImageStyle}
              className="hoverable"
            />
            {active && (
              <React.Fragment>
                <div className="flex start float" css={emojiWrapper}>
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
                    {data.date}
                  </h3>
                </div>
              </React.Fragment>
            )}
          </div>
        </Link>
      </div>
      <LargeMediaRight data={data} active={active} />
    </div>
  )
}

export default StudioPrana
