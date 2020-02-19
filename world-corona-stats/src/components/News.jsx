import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
export default function News() {
	const [coronaNews, setCoronaNews] = useState([]);
	useEffect(() => {
		(async function() {
			const newsData = await axios({
				method: "GET",
				url:
					"https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host":
						"microsoft-azure-bing-news-search-v1.p.rapidapi.com",
					"x-rapidapi-key": "287a779037mshc14498a1ac0ebc0p1b8a7fjsn8e058dbd8350"
				},
				params: {
					q: "corona"
				}
			})
				.then((response) => {
					setCoronaNews(response.data.value);
					const src = Object.keys(response.data.value[0].image)[0];
					console.log(response.data.value);
					console.log(response.data.value[0].image.thumbnail.contentUrl);
				})
				.catch((error) => {
					console.log(error);
				});
		})();
	}, []);
	return (
		<div className="corona-news">
			{coronaNews.map((news, idx) => {
				return (
					<Card className="news-card" key={idx} style={{ width: "18rem" }}>
						<Card.Img variant="top" />
						<Card.Body>
							<Card.Title>{news.name}</Card.Title>
							<Card.Text>{news.description}</Card.Text>
						</Card.Body>
						<Card.Link href={news.url}>Check the news</Card.Link>
					</Card>
				);
			})}
		</div>
	);
}
