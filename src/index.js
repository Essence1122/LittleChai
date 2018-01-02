import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import dva from './utils/dva'
import Router from './router'
import models from './models'

const app = dva({
  initialState: {},
  models: models,
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})
const App = app.start(<Router />)

persistStore(app.getStore(), {
  storage: AsyncStorage,
  blacklist: ['router'],
})

export default App
