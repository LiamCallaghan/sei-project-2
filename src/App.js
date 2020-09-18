import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './component/common/Header'
import Home from './component/common/Home'

import CategoryIndex from './component/game/CategoryIndex'
import Quiz from './component/game/Quiz'
import Result from './component/game/Result'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/game/results' component={Result}/>
        <Route path="/game/:id" component={Quiz}/>
        <Route path="/game" component={CategoryIndex}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
