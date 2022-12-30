import React, { useState, useEffect } from "react"
import Header from '../components/Header/header';
import Banner from '../components/Banner/banner';
import Card from '../components/Card/card';
import Footer from '../components/Footer/footer';
import '../index.css';
import '../components/Card/card.css';


function Home() {

	const [lodgings, setLodgings] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/logements.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			console.log(res);
			setLodgings(res);
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	return (
		<div>
			<Header />
			<Banner />
			<div className='row-cards secondary-background'>
            	<div className='w-cards'>
				{ lodgings && lodgings.length > 0 && lodgings.map((item) =>
				<Card
					id={item.id}
					title={item.title}
					cover={item.cover}
				/>
			)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;