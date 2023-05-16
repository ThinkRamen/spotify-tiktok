import axios from 'axios'
import { useEffect, useState } from 'react'

function CityNameFromLatLong() {
	const [lat, setLat] = useState(null)
	const [long, setLong] = useState(null)
	const [cityName, setCityName] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLat(position.coords.latitude)
				setLong(position.coords.longitude)
			},
			(error) => console.error(error)
		)
	}, [])

	useEffect(() => {
		if (lat && long) {
			axios
				.get(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
				)
				.then((response) => setCityName(response.data.city))
				.catch((error) => console.error(error))
		}
	}, [lat, long])

	return (
		<div>
			{cityName ? (
				<p>Your city is: {cityName}</p>
			) : (
				<p>Fetching your city name...</p>
			)}
		</div>
	)
}

export default CityNameFromLatLong
