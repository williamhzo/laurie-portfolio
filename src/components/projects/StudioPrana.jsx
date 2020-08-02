import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import projects from '../../data/projects'
import LargeMedia from '../LargeMedia'

const MainSection = styled.section``

const HoverableSection = styled.div``

const RelativeWrapper = styled.div`
  width: 50%;
`

const EmojiWrapper = styled.div`
  top: calc(-1.5rem - 1rem);
  width: 100%;
  padding-left: 1rem;
`

const EmojisList = styled.ul``

const Emoji = styled.li`
  margin-right: 1rem;
`

const Title = styled.h1`
  text-align: right;
  top: 1rem;
  right: 1rem;
`

const HoverImage = styled.img`
  width: 100%;
`

const TagsWrapper = styled.div`
  height: 100%;
  right: calc(-7rem - 1rem);
`

const TagsList = styled.ul`
  margin: 0;
  width: 7rem;
`

const Tag = styled.li``

const DateWrapper = styled.div`
  width: 100%;
  bottom: calc(-1rem - 1.5rem);
`

const Date = styled.h3`
  margin-left: 1rem;
`

function StudioPrana() {
  const [active, setActive] = useState(false)
  const data = JSON.parse(JSON.stringify(projects.studioPrana))

  return (
    <MainSection
      className="flex"
      style={{
        backgroundColor: active ? data.backgroundColor : 'inherit',
      }}
    >
      <HoverableSection
        className="project-box relative flex"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {active && (
          <Title className="float project-title">
            {data.title[0]}
            <br></br>
            {data.title.length > 1 && data.title[1]}
          </Title>
        )}

        <RelativeWrapper className="relative flex centered">
          <Link className="custom-cursor" exact to={'/studio-prana'}>
            <HoverImage
              alt={`${data.title} illustration`}
              src={data.smallMedia}
              className="hoverable"
            />{' '}
          </Link>

          {active && (
            <React.Fragment>
              <EmojiWrapper className="flex start float">
                <EmojisList className="tags flex">
                  {data.emojiTags.map((el, index) => (
                    <Emoji className="emoji" key={index}>
                      {el}
                    </Emoji>
                  ))}
                </EmojisList>
              </EmojiWrapper>

              <TagsWrapper className="flex column end float">
                <TagsList className="tags">
                  {data.tags.map((el, index) => (
                    <Tag className="project-tag" key={index}>
                      {el}
                    </Tag>
                  ))}
                </TagsList>
              </TagsWrapper>

              <DateWrapper className="flex end float">
                <Date className="project-date">{data.date}</Date>
              </DateWrapper>
            </React.Fragment>
          )}
        </RelativeWrapper>
      </HoverableSection>
      <LargeMedia data={data} active={active} side="right" />
    </MainSection>
  )
}

export default StudioPrana
