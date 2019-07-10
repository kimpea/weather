import React from "react";

const Weather = props => (
	<div className="Weather">
		{ props.city && props.country && <h3>{ props.city}, { props.country }</h3> }
		{ props.temperature && <h3>{ props.temperature }&deg;C</h3> }
		{ props.humidity && <h3>Humidity at { props.humidity }%</h3> }
		{ props.description && <h3>{ props.description }</h3> }
		{ props.error && <p>{ props.error }</p> }
	</div>
);

export default Weather;