import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div``

const Video = styled.video`
  width: 100%;
  height: 100%;
`

const BorderRight = styled.div``
const BorderLeft = styled.div``

const Image = styled.img``

const LargeMedia = ({ data, active, video, side }) => {
  return (
    <Container className="project-box relative flex">
      {video ? (
        <Video
          id={`${data.title}-video`}
          loop
          autoPlay
          alt={`${data.title} video`}
        >
          <source src={data.largeMedia} type="video/mp4" />
          <source src={data.largeMedia} type="video/ogg" />
          Your browser does not support the video tag.
        </Video>
      ) : (
        <Image alt={`${data.title} illustration`} src={data.largeMedia} />
      )}
      {active && side === 'left' && (
        <BorderLeft
          className="border-project"
          style={{
            borderTop: `1rem solid ${data.backgroundColor}`,
            borderBottom: `1rem solid ${data.backgroundColor}`,
            borderLeft: `1rem solid ${data.backgroundColor}`,
          }}
        ></BorderLeft>
      )}
      {active && side === 'right' && (
        <BorderRight
          className="border-project"
          style={{
            borderTop: `1rem solid ${data.backgroundColor}`,
            borderBottom: `1rem solid ${data.backgroundColor}`,
            borderRight: `1rem solid ${data.backgroundColor}`,
          }}
        ></BorderRight>
      )}
    </Container>
  )
}

export default LargeMedia
