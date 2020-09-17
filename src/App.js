import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './component/common/Header'
import Home from './component/common/Home'

import CategoryIndex from './component/game/CategoryIndex'
import Quiz from './component/game/Quiz'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={CategoryIndex}/>
        <Route path="/game/:id" component={Quiz}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
