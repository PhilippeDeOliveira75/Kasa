import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import imageDesktop from '../assets/AboutDesktopBanner.webp';
import imageMobile from '../assets/AboutMobileBanner.webp';
import '../index.css';
import aboutInfos from '../about.json';
import Collapse from '../components/Collapse/collapse';


function About() {

	document.title = "A propos";
    
    const widthScreen = window.innerWidth;

    /*let imgBanner;
  
    if(widthScreen > 767){
      imgBanner = imageMobile;
    } else {
      imgBanner = imageDesktop;
    }*/

	return (
		<div>
			<Header />
			<div className='row-home-banner'>
            	<img src={imageDesktop} alt='Paysage_montagneux' className='img-about-banner' />
        	</div>

			<div className='aboutCollapse'>
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