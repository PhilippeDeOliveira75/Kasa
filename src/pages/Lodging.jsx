import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header/header';
import Gallery from '../components/Gallery/gallery';
import RentalInfo from '../components/RentalInfo/rentalinfo';
import Footer from '../components/Footer/footer';
import '../index.css';

function Lodging() {

	const { id } = useParams();
	const navigate = useNavigate();
	const [lodging, setLodging] = useState({});

	useEffect(() => {
		fetch("http://localhost:3000/logements.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			const lodging = res.find((item) => item.id === id);
			if(lodging === undefined) {
				return navigate("/404")
			} else {
				setLodging(lodging)
			}
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	return (
		<div>
			<Header />
			<div>
			{ lodging && lodging.length > 0 && lodging.map((item) =>
			<Gallery 
				pictures={item.pictures}
			/>
			)}
			</div>
			<div>
			{ lodging && lodging.length > 0 && lodging.map((item) =>
			<RentalInfo 
				title={item.title}
			/>
			)}
			</div>
			<Footer />
		</div>
	);
}

export default Lodging;