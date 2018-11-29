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

const Mail = styled.a`
	color: ${theme.primaryColor};
	font-family: 'Nunito', sans-serif;
	font-weight: 300;
	font-size: 1.1rem;
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
						We are <br /> Online Creation.
					</H1>
					<Paragraph>
						We are a full-stack <Strong>web</Strong> developing
						company from <Strong>The Netherlands</Strong>, We are
						specialized in building{' '}
						<Strong>scalable web applications</Strong> <br />
						The website is still work in progress.
					</Paragraph>
					<Paragraph>
						For questions you can mail{' '}
						<Mail href="mailto:info@timruiterkamp.nl">us</Mail>.
					</Paragraph>
				</IntroSection>
			</Column>
		)
	}
}

export default Homepage
