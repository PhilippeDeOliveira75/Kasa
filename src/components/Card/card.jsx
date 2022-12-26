import './card.css';
import '../../index.css';
import { NavLink } from "react-router-dom";


function Card({ title, cover, id }) {
    return (
        <div className='row-cards secondary-background'>
            <div className='w-cards'>
                <NavLink to={'/rental/' + id} className='card' data-id={id}>
                    <img className='card-img' src={cover} alt={`${title} cover`}></img>
                    <h2 className='card-title'>{title}</h2>
                </NavLink>
            </div>
        </div>
    
    )
}

export default Card;