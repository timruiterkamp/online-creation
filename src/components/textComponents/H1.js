import React from 'react'
import styled from 'styled-components'
import theme from '../../themeConfig'

const Header = styled.h1`
	color: ${theme.primaryColor};
	margin: 0;
	font-size: 400%;
	font-family: 'Exo', sans-serif;
	font-weight: 800;
`

export default function H1(props) {
	return <Header>{props.children}</Header>
}
