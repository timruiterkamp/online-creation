import React, { Component } from 'react'
import './styles/global.css'
import GridWrapper from './components/hoc/Grid'
import Nav from './components/Nav'
import Routes from './routes/Routes'
import styled from 'styled-components'
import theme from './themeConfig'

const AppWrapper = styled.div`
	height: 100%;
	background-color: ${theme.background.primary};
`
class App extends Component {
	render() {
		return (
			<AppWrapper className="App">
				<GridWrapper>
					<Nav />
					<Routes />
				</GridWrapper>
			</AppWrapper>
		)
	}
}

export default App
