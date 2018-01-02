import React from 'react'
import { create } from 'dva-core'
import { Provider, connect } from 'react-redux'
export { connect }

export default function(opts={}) {
  const app = create(opts)

  if (!global.registered) {
    opts.models.forEach(model => app.model(model))
  }

  global.registered = true
  const oldAppStart = app.start
  app.start = start

  function start(container) {
    oldAppStart.call(app)
    const store = app._store
    app.getStore = () => store
    return () => <Provider store={store}>{container}</Provider>
  }

  return app
}
