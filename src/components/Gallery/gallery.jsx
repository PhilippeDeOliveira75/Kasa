import './gallery.css';
import React, { useEffect, useState } from 'react';
import chevronRight from '../../assets/ChevronRight.webp';
import chevronLeft from '../../assets/ChevronLeft.webp';
import '../../index.css';



function Gallery(props) {

    const [index, setindex] = useState(0)
    const pictures = props.pictures;
    const pictureList = pictures.length;
    let styleDisplay;
    
    function chevronNext(){
        if(index === pictureList -1 ){
            setindex(0)
        }else{
            setindex(index +1)
        }
    }
    
    function chevronPrevious(){
        if(index === 0 ){
            setindex(pictureList -1)
        }else{
            setindex(index -1)
        }
    }
    
    return (
        <div className="row-carousel" >
            <div className='w-carousel'>
                <img className='carouselImg' src={pictures[index]}/>
                <div className='carouselChange'>
                    <p className='previous' onClick={chevronPrevious}> <img src={chevronLeft} alt="Chevron left" /> </p>
                    <p className='next' onClick={chevronNext}> <img src={chevronRight} alt="Chevron right" /> </p> 
                </div>
            </div>
            <div className='number' style={{display : styleDisplay}}>
                {index+1 + " / " + pictureList}
            </div>
         </div>
      );
    }

export default Gallery;