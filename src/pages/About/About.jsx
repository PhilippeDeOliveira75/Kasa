import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import imageDesktop from '../../assets/AboutDesktopBanner.webp';
import imageMobile from '../../assets/AboutMobileBanner.webp';
import '../../index.css';
import './About.css';
import Collapse from '../../components/Collapse/Collapse';
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

	

	return (
		<div>
			<Header />
			<div className='row-about-banner'>
				<div className='img-about-banner'>
				</div>
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