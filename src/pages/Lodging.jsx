import React, { useState, useEffect } from "react"
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import '../index.css';

function Lodging() {

	const [lodgings, setLodgings] = useState([]);

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
			<div>
				<img></img>
			</div>
			<div className="row-title-host">
				<div className="w-title">
					<h1></h1>
					<p></p>
				</div>
				<div className="w-host">
					<p></p>
					<img></img>
				</div>
			</div>
			<div className="row-tags-rating">
				<div className="w-tags">
					<p></p>
				</div>
				<div className="w-rating">
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
			<div className="row-description-facilities">
				<div className="w-description">
				</div>
				<div className="w-facilities">
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Lodging;