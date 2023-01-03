import './rentalinfo.css';
import '../../index.css';

function RentalInfo(title) {
	return (
        <div className="row-title-host">
			<div className="w-title">
				<h1>{ lodging.title }</h1>
				<p></p>
			</div>
			<div className="w-host">
				<p></p>
				<img></img>
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
        </div>
	);
}

export default RentalInfo;