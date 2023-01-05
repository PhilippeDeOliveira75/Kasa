import React from 'react';
import emptyStar from '../../assets/empty_star.webp';
import plainStar from '../../assets/plain_star.webp';
import './ratestar.css';
import '../../index.css';


function RateStar(props) {

	return (
        <div className='rateStar'>
            <img src={plainStar} alt='plain rate star'/>
            <img src={emptyStar} alt='empty rate star'/>
    </div>  
	);
}

export default RateStar;