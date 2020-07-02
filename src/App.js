import React from 'react'

import './styles/_global.scss'
import NavigationBar from './components/navigation/NavigationBar'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  )
}

export default App
