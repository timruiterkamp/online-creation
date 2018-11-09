import React, { Component } from 'react'

class Homepage extends Component {
	componentDidMount() {
		document.title = 'Online Creation'
	}

	render() {
		return (
			<section className={'introduction'}>
				<h2>Coole website gozer!</h2>
			</section>
		)
	}
}

export default Homepage
