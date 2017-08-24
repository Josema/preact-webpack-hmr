import React from 'react'
import { render } from 'react-dom'
import App from '/components/App.js'

const container = document.querySelector('#app')

if (module.hot) module.hot.accept()

render(<App />, container)
