import React from 'react'

const LargeMediaRight = ({ data, active }) => {
  return (
    <div className="project-box relative flex">
      <img alt={`${data.title} illustration`} src={data.largeMedia} />
      <div
        className="border-project"
        style={{
          borderTop: active ? `1rem solid ${data.backgroundColor}` : 'none',
          borderRight: active ? `1rem solid ${data.backgroundColor}` : 'none',
          borderBottom: active
            ? `1rem solid ${data.backgroundColor}`
            : 'none',
        }}
      ></div>
    </div>
  )
}

export default LargeMediaRight
