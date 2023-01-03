import './card.css';
import '../../index.css';
import { NavLink } from "react-router-dom";


function Card({id, title, cover}) {
    return (
        <NavLink to={'/lodging/' + id} className='card' data-id={id}>
            <div>
                <img className='card-img' src={cover} alt={`${title} cover`}></img>
            </div>
            <div className='w-card-title'>
                <h2 className='card-title'>{title}</h2>
            </div>
        </NavLink>
    )
}

export default Card;