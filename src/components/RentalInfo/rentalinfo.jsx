import './rentalinfo.css';
import '../../index.css';
import RateStar from '../RateStar/ratestar';
import Collapse from '../Collapse/collapse';


function RentalInfo(props) {
	console.log(props)

	const tags = props.tags;
  	const tagsList = tags.map((tag) => 
		<li className='tags primary-background'>{tag}</li>
	);

	const equipments = props.equipments;
	const equipmentsList = equipments.map((equipment) => 
		<li className=''>{equipment}</li>
	);

	return (
		<div className='row-rentalinfo'>
			<div className="row-title-host">
				<div className="w-title">
					<h1 className='lodging-title primary'>{props.title}</h1>
					<p className='lodging-location primary'>{props.location}</p>
				</div>
				<div className="w-host">
					<div className='w-host-name'>
						<p className='host-name primary'>{props.hostname}</p>
					</div>
					<img className='host-picture' src={props.hostpicture} alt={`Photo de ${props.hostname}`}></img>
				</div>
			</div>

			<div className="row-tags-rating">
				<div className="w-tags">
					<ul className='tagsList'>{tagsList}</ul>
				</div>
				<div className="w-rating">
					<RateStar />
				</div>
			</div>
			<div className="row-description-facilities">
				<div className="w-description">
					<Collapse 
						title="Description"
						texte={props.description}
					/>
				</div>
				<div className="w-facilities">
					<Collapse 
						title="Equipements"
						texte={
							<ul className=''>{equipmentsList}</ul>
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default RentalInfo;