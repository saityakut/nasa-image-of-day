import { API_KEY } from '$env/static/private';

export async function load({ fetch }) {
	const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
	const response = await fetch(url);
	return response.json();
}
