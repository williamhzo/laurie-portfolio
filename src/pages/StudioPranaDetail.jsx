import React from 'react'
import projects from '../data/projects'
import styled from '@emotion/styled'

const Section = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
`

const StripContainer = styled.section`
  padding: 2rem 2rem 2rem 0;
  height: 100%;
  ${(props) => ({
    backgroundColor: props.backgroundColor,
  })};
`

const ProjectTitle = styled.h1`
  margin-bottom: 1.5rem;
`

const ProjectDate = styled.p`
  margin-bottom: 3rem;
`

const LightText = styled.p`
  margin-top: 3rem;
`

const Text = styled.p`
  margin-bottom: 3rem;
`

const Separator = styled.hr`
  width: 60%;
`

const EmojiList = styled.ul`
  margin-top: 1.5rem;
`

const Emojis = styled.li`
  margin-right: 1rem;
`

const PaddingWrapper = styled.div`
  padding: 0 3rem;
`

function StudioPrana() {
  const data = JSON.parse(JSON.stringify(projects.studioPrana))

  return (
    <Section>
      <StripContainer backgroundColor={data.stripColor}>
        <PaddingWrapper>
          <ProjectTitle>
            studio<br></br>prana
          </ProjectTitle>
          <ProjectDate className="light">{data.date}</ProjectDate>
        </PaddingWrapper>
        <Separator></Separator>
        <PaddingWrapper>
          <LightText className="light">{data.lightDescription}</LightText>
          <Text>{data.regularDescription}</Text>
        </PaddingWrapper>
        <Separator></Separator>
        <PaddingWrapper>
          <EmojiList className="tags flex">
            {data.emojiTags.map((el, index) => (
              <Emojis className="emoji" key={index}>
                {el}
              </Emojis>
            ))}
          </EmojiList>
        </PaddingWrapper>
      </StripContainer>
    </Section>
  )
}

export default StudioPrana
