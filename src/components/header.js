//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoIcon from "../images/svg-icons/logo.svg"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (

  <header className="header">

		<div className="header__inner-container">
			<div className="header__logo">
				<AniLink paintDrip hex="#eb8f00" to="/" className="header__logo--link" title="Luis Cestou">
					<LogoIcon />
				</AniLink>
			</div>
			<nav className="header__nav">
				<AniLink swipe direction="down" to="/" className="header__nav-link">Work</AniLink>
				<a href="https://bit.ly/luisCestouResume" className="header__nav-link" target="_blank" rel="nofollow noopener noreferrer">Resume</a>
				<a href="mailto:hola@luiscestou.com" className="header__nav-link">Contact</a>
			</nav>
		</div>
	</header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
