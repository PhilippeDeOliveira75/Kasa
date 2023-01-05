import logo from '../../assets/logo-footer.webp';
import './footer.css';
import '../../index.css';


function Footer() {
	return (
		<footer className='row-footer'>
				<img src={logo} alt='logo-kasa'/>
				<p className='text-footer'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;