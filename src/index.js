import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import App from './App'
import store from './redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
