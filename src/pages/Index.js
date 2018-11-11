import React, { Component } from 'react'
import H1 from '../components/textComponents/H1'
import Paragraph from '../components/textComponents/Paragraph'
import styled from 'styled-components'
import theme from '../themeConfig'

const Column = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const IntroSection = styled.section`
	max-width: 45rem;
	position: absolute;
	left: 15%;
	top: 50%;
	transform: translateY(-50%);
	width: 40%;
	max-height: 90%;
`

const Strong = styled.strong`
	color: ${theme.primaryColor};
	font-weight: 700;
`

class Homepage extends Component {
	componentDidMount() {
		document.title = 'Online Creation'
	}

	render() {
		return (
			<Column>
				<IntroSection>
					<H1>
						Hi. <br /> My name is Tim.
					</H1>
					<Paragraph>
						I am a full-stack <Strong>JavaScript</Strong> developer
						from <Strong>The Netherlands</Strong>, I study
						Multimedia and communication design at the{' '}
						<Strong>
							University of Applied sciences Amsterdam
						</Strong>{' '}
						with deeping in Front-end development . Besides my study
						I am currently working in <Strong>Amsterdam</Strong> and
						as a freelancer.
						<br />
					</Paragraph>
				</IntroSection>
			</Column>
		)
	}
}

export default Homepage
