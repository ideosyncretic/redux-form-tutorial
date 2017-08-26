import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

import reducers from './reducers'
import PostsIndex from './components/PostsIndex'
import PostsNew from './components/PostsNew'
import PostsShow from './components/PostsShow'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id/' component={PostsShow} /> {/* we don't put this route on top because the wildcard (colon) will cause /posts/new to match */ }
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
