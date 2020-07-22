/*
 * @Author: 托尼
 * @Date: 2020-01-13 16:41:37
 * @LastEditors: 托尼
 * @LastEditTime: 2020-07-22 16:18:41
 */ 

import 'core-js'
import '@babel/runtime/regenerator'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
