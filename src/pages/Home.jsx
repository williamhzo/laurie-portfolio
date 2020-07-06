import React from 'react'

import '../styles/_global.scss'
import StudioPrana from '../components/projects/StudioPrana'
import Lacoste from '../components/projects/Lacoste'

const Home = () => {
  return (
    <div className="container">
      <StudioPrana />
      <Lacoste />
    </div>
  )
}

export default Home
