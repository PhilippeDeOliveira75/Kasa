import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import imageDesktop from '../assets/AboutDesktopBanner.webp';
import imageMobile from '../assets/AboutMobileBanner.webp';
import '../index.css';

import Collapse from '../components/Collapse/collapse';
import React, { useState, useEffect } from "react";


function About() {

  const [aboutInfos, setAboutInfos] = useState([])

  useEffect(() => {
		fetch("http://localhost:3000/about.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			console.log(res);
			setAboutInfos(res);
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	const widthScreen = window.innerWidth;
	
    let imgBanner;
  
    if(widthScreen > 767){
      imgBanner = imageDesktop;
    } else {
      imgBanner = imageMobile;
    }

	return (
		<div>
			<Header />
			<div className='row-home-banner'>
            	<img src={imageBanner} alt='Paysage_montagneux' className='img-about-banner' />
        	</div>

			<div className='row-collapse'>
                {aboutInfos.map((infos, index) => (
                    <Collapse
                        key={`${infos.title}-${index}`}
                        title={infos.title}
                        texte={infos.texte}
                    />
                ))}
            </div>
			<Footer />
		</div>
	);
}

export default About;