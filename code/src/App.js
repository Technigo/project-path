import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' //createStore

import { game } from './reducers/game'
import { ui } from './reducers/ui'
import { StartPage } from './components/StartPage'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer })
const store = configureStore({ reducer })

// Retrieve localstorage as initial state
// const persistedStateJSON = localStorage.getItem('gameReduxState')
// let persistedState = {}

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON)
// }

// Create store with initial state
// const store = createStore(
//   reducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// Store the state in localstorage when Redux state change
// store.subscribe(() => {
//   localStorage.setItem('gameReduxState', JSON.stringify(store.getState()))
// })

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
