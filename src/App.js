import React from 'react'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Topic from './components/Topic'
import Message from './components/Message'
import User from './components/User'
import Collect from './components/Collect'
import NoMatch from './components/NoMatch'
import NewTopic from './components/NewTopic';
import UpdateTopic from './components/UpdateTopic';

class App extends React.Component{
	render(){
		return(
			<HashRouter>
				<div>
					<Header />
					<Footer />
				</div>
			</HashRouter>
		)
	}
}

export default App
