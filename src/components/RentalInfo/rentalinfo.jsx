import './rentalinfo.css';
import '../../index.css';

function RentalInfo(props) {
	console.log(props)
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
					<li className='tags'>{props.tags}</li>
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
		</div>
	);
}

export default RentalInfo;