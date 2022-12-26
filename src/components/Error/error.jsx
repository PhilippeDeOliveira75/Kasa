import './error.css';
import '../../index.css';
import { NavLink } from "react-router-dom";

function Error() {
	return (
		<div className='row-404'>
            <h1 className='title-404 primary'>404</h1>
            <p className='text-404 primary'>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className='backhome-btn primary'>Retourner sur la page d’accueil</NavLink>
		</div>
	);
}

export default Error;