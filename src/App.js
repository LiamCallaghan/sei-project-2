import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/common/Home'
import CategoryIndex from './component/game/CategoryIndex'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={CategoryIndex}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
