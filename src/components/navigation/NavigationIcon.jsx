import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import 'tippy.js/dist/tippy.css' // optional

const NavigationIcon = ({ content, src }) => (
  <Tippy
    className="tippy"
    content={content.toUpperCase()}
    hideOnClick={true}
    inertia={true}
    // interactive={true}
    // interactiveBorder={15}
    moveTransition="transform 0.2s ease-out"
    maxWidth={150}
    offset={[0, 20]}
    placement="bottom-end"
    trigger="mouseenter"
    theme="light"
  >
    <div className="navigation-icon hoverable">
      <img src={`../assets/emojis/${src}`} alt="emoji navigation icon" />
    </div>
  </Tippy>
)

export default NavigationIcon
