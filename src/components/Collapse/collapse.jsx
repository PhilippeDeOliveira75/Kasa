import './collapse.css';
import React, { useRef, useState } from 'react';
import chevronDown from '../../assets/ChevronDown.webp';
import chevronUp from '../../assets/ChevronUp.webp';
import '../../index.css';

function Collapse({ title, texte }){

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();

    return(
        <div className='collapseDivBox'>
            <div className='collapseDivTitle primary-background'>
                <h1 className='collapseTitle'>{title}</h1>
                <p className='buttonUpDown' onClick={toggle}>
                    {!open ? <img src={chevronDown} alt="Chevron down" /> : <img src={chevronUp} alt="Chevron up" /> }
                </p>
            </div>
            <div className="content-parent secondary" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className='primary toggleParagraph'>{texte}</div>
            </div>

        </div>
    )

}



export default Collapse