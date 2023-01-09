import './gallery.css';
import React, { useState } from 'react';
import chevronRight from '../../assets/ChevronRight.webp';
import chevronLeft from '../../assets/ChevronLeft.webp';
import '../../index.css';



function Gallery(props) {

	const [current, setCurrent] = useState(0);

	const pictures = props.pictures;

    const length = pictures.length;

    const rightSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const leftSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            {pictures.map((picture, index) =>
                current === index && (
                    <div key={picture} className="carrousel_pictures">
                        <span className="carrousel_count_display">
                            {index + 1}/{length}
                        </span>
                        <img src={picture} alt="Rental" />
                        {length > 1 ? (
                            <>
                                <div className="carrousel_leftArrow" onClick={leftSlide}>
                                    <img src={chevronLeft} alt="Preview arrow" />
                                </div>
                                <div className="carrousel_rightArrow" onClick={rightSlide}>
                                    <img src={chevronRight} alt="Next arrow" />
                                </div>
                            </>
                        ) : null}
                    </div>
                )
            )}
        </>
    );

}

export default Gallery;