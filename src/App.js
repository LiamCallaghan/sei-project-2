import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/common/Home'
import Categories from './component/game/Categories'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Categories}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
