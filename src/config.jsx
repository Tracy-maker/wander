export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
	}
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
export const APP_ID = process.env.REACT_APP_APP_ID;
export const OPEN_WEATHER_MAP_BASE_URL = process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL;
