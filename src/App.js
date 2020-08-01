import React from 'react'
import { Switch, Route } from "react-router-dom";

import './styles/_global.scss'
import NavigationBar from './components/navigation/NavigationBar'
import Home from './pages/Home'

import StudioPranaDetail from './pages/StudioPranaDetail.jsx'


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studio-prana" component={StudioPranaDetail} />
        </Switch>
      </main>
    </div>
  )
}

export default App
