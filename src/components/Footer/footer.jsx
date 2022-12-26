import logo from '../../assets/logo-footer.webp';
import './footer.css';


function Footer() {
	return (
		<footer>
			<div className='row-footer'>
				<img src={logo} alt='logo-kasa'/>
				<p className='text-footer'>© 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;