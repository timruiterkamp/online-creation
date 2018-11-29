import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../themeConfig'
import { FaReact } from 'react-icons/fa'
import { FiHome, FiUser, FiBriefcase, FiPhone } from 'react-icons/fi'

const Nav = styled.nav`
	height: 100%;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${theme.background.secondary};
	z-index: 1;
`

const NavList = styled.ul`
	list-style: none;
	padding-left: 0;
`

const NavListItem = styled.li`
	margin: 1rem 0;
`

const NavItem = styled(NavLink)`
	text-decoration: none;
	color: #4d4d4e;
	font-size: 1.3rem;
	transition: 0.2s;
	&:hover {
		transition: 0.2s;
		color: ${theme.primaryColor};
	}
	&.active {
		color: ${theme.primaryColor};
		font-weight: bold;
	}
`

export default function Navigation() {
	return (
		<Nav>
			<NavList>
				<NavListItem>
					<NavItem exact to="/">
						<FiHome />
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem to="/about">
						<FiUser />
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem to="/skills">
						<FaReact />
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem to="/projects">
						<FiBriefcase />
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem to="/contact">
						<FiPhone />
					</NavItem>
				</NavListItem>
			</NavList>
		</Nav>
	)
}
