import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/_global.scss'
import NavigationBar from './components/navigation/NavigationBar'
import Home from './pages/Home'

import StudioPranaDetail from './pages/StudioPranaDetail.jsx'
import LacosteDetail from './pages/LacosteDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studio-prana" component={StudioPranaDetail} />
          <Route exact path="/lacoste" component={LacosteDetail} />
        </Switch>
      </main>
    </div>
  )
}

export default App
