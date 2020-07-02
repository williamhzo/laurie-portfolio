import React from 'react'

import './styles/_global.scss'
import NavigationBar from './components/navigation/NavigationBar'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import StudioPrana from './pages/StudioPrana'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <StudioPrana />
      <ProjectView />
    </div>
  )
}

export default App
