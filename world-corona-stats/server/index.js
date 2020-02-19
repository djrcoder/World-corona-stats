const express = require("express");

const port = process.env.PORT || 8080;
const app = express();

app.listen(port, () => console.log(`Listening on Port ${port}`));

// api here
const axios = require("axios");
const coronaData = axios({
	method: "GET",
	url:
		"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	headers: {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "130e574162msh6cc16dbd234fc6ep18d4e3jsn9a2bc8ca2759"
	}
})
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});
console.log(coronaData);
const countryInfo = axios({
	method: "GET",
	url: "https://countries-cities.p.rapidapi.com/location/country/GB",
	headers: {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "countries-cities.p.rapidapi.com",
		"x-rapidapi-key": "287a779037mshc14498a1ac0ebc0p1b8a7fjsn8e058dbd8350"
	},
	params: {
		format: "json",
		code: "US"
	}
})
	.then((response) => {
		console.log(response.data.population);
	})
	.catch((error) => {
		console.log(error);
	});

module.exports = { app };
