import Header from '../components/Header/header';
import Banner from '../components/Banner/banner';
import Card from '../components/Card/card';
import Footer from '../components/Footer/footer';
import '../index.css';

function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<Card />
			<Footer />
		</div>
	);
}

export default Home;