import React from 'react'
import styled from 'styled-components'
import theme from '../../themeConfig'

const Text = styled.p`
	color: ${theme.textColor};
	font-family: 'Nunito', sans-serif;
	font-weight: 300;
	font-size: 1.1rem;
`

export default function Paragraph(props) {
	return <Text>{props.children}</Text>
}
