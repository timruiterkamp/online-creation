import React, { Component } from 'react'
import './styles/global.css'
import GridWrapper from './components/hoc/Grid'
import Nav from './components/Nav'
import Routes from './routes/Routes'

class App extends Component {
	render() {
		return (
			<div className="App">
				<GridWrapper>
					<Nav />
					<Routes />
				</GridWrapper>
			</div>
		)
	}
}

export default App
