import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
	render() {
		return (
			<nav>
				<div className="nav-wrapper white accent-text">
					<Link to="/" className="brand-logo accent-text">Vitamin</Link>
					<a className="brand-sublogo accent-text">みんながみんなの心のサプリメント！</a>
					<a href="#!" data-activates="sidebar-nav" className="button-collapse accent-text"><i className="material-icons">menu</i></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a className="nav-link-big accent-text">心</a></li>
						<li><a className="nav-link-big accent-text">生活</a></li>
						<li><a className="nav-link-big last-big accent-text">イベント</a></li>
						<li><a className="accent-text" href="#!">About</a></li>
						<li><a className="accent-text" href="#!">Member</a></li>
						<li><a className="accent-text" href="#!">Contact</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown1" data-beloworigin="true"><i className="material-icons right">language</i></a></li>
					</ul>
					<ul className="side-nav" id="sidebar-nav">
						<li><a className="accent-text" href="#!">心</a></li>
						<li><a className="accent-text" href="#!">生活</a></li>
						<li><a className="accent-text" href="#!">イベント</a></li>
						<li><a className="accent-text" href="#!">About</a></li>
						<li><a className="accent-text" href="#!">Member</a></li>
						<li><a className="accent-text" href="#!">Contact</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown2" data-beloworigin="true"><i className="material-icons left">language</i></a></li>
					</ul>
					<ul id="lang-dropdown1" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
					<ul id="lang-dropdown2" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar