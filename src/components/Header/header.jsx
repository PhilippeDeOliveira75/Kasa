import './Header.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.webp';
import '../../index.css';
import { useState } from 'react';

function Header() {
	let [active,setActive] = useState(window.location.pathname);

	return (
		<header>
			<div className='row-header'>
				<NavLink to="/">
					<img src={logo} alt='logo_kasa' className='logo-kasa' />
				</NavLink>
				<nav>
					<ul className='w-nav'>
						<li>
							<NavLink to="/" className={active==="/"?"active nav-btn primary":"nav-btn primary"}>Accueil</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={active==="/about"?"active nav-btn primary":"nav-btn primary"}>À Propos</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;