/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/dist/tippy.css' // optional

const tippyLargeStyle = css({
  minWidth: '440px',
  textAlign: 'left',
})

const NavigationIcon = ({ content, paragraph, src }) => (
  <Tippy
    content={paragraph}
    css={tippyLargeStyle}
    allowHTML={true}
    interactive={true}
    interactiveBorder={15}
    className="tippy"
    hideOnClick={true}
    trigger="click"
    theme="light-border"
    offset={[0, 20]}
    placement="bottom-end"
    maxWidth="none"
  >
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
      theme="light-border"
    >
      <div className="navigation-icon hoverable">
        <img src={`../assets/emojis/${src}`} alt="emoji navigation icon" />
      </div>
    </Tippy>
  </Tippy>
)

export default NavigationIcon
