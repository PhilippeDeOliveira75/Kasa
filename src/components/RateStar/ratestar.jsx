import React from 'react';
import emptyStar from '../../assets/empty_star.webp';
import plainStar from '../../assets/plain_star.webp';
import './Ratestar.css';
import '../../index.css';


function RateStar(props) {

    const rating = props.rating;
    const range = [1, 2, 3, 4, 5];
    
	return (
        <div className='rateStar'>
            {range.map((rangeElem) =>
                rating >= rangeElem ? 
                <img key={rangeElem} src={plainStar} alt='Rate star'/> : 
                <img key={rangeElem} src={emptyStar} alt='Rate star'/>
                
            )}
        </div>
	);
}

export default RateStar;