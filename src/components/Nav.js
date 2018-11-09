import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
	height: 100%;
	display: flex;
	flex-direction: column;
`
const NavList = styled.ul`
	list-style: none;
	padding-left: 0;
`

export default function Navigation() {
	return (
		<Nav>
			<NavList>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/skills">Skills</NavLink>
				</li>
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</NavList>
		</Nav>
	)
}
