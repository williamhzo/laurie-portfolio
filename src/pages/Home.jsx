import React from 'react'

import '../styles/_global.scss'

import StudioPrana from '../components/projects/StudioPrana'
import Lacoste from '../components/projects/Lacoste'
import ChineseNewYear from '../components/projects/ChineseNewYear'
import ElsachaTV from '../components/projects/ElsachaTV'
import Apana from '../components/projects/Apana'
import Thienot from '../components/projects/Thienot'
import Louboutin from '../components/projects/Louboutin'
import Biotherm from '../components/projects/Biotherm'
import JeanLouis from '../components/projects/JeanLouis'
import MadeCom from '../components/projects/MadeCom'
import CanalPlus from '../components/projects/CanalPlus'

const Home = () => {
  return (
    <div className="container">
      <StudioPrana />
      <Lacoste />
      <ChineseNewYear />
      <ElsachaTV />
      <Apana />
      <Thienot />
      <Louboutin />
      <Biotherm />
      <JeanLouis />
      <MadeCom />
      <CanalPlus />
    </div>
  )
}

export default Home
