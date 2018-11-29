import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index'
import NotFound from '../pages/404'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'

export default function Routes(props) {
	return (
		<Switch>
			<Route exact path="/" component={IndexPage} />
			<Route exact path="/about" component={About} />
			<Route exact path="/projects" component={Projects} />
			{/* <Route exact path="/skills" component={Skills} /> */}
			<Route exact path="/contact" component={Contact} />
			<Route component={NotFound} />
		</Switch>
	)
}
