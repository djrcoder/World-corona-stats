import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../style/news.css";
export default function News() {
	const [coronaNews, setCoronaNews] = useState([]);
	const [newsLanguage, setNewsLanguage] = useState("en-US");
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
					q: "corona virus",
					mkt: newsLanguage
				}
			})
				.then((response) => {
					console.log(response);
					//push ones with image to array
					setCoronaNews(response.data.value.filter((obj) => obj.image));
				})
				.catch((error) => {
					console.log(error);
				});
		})();
	}, []);
	console.log(coronaNews);
	return (
		<div className="corona-news">
			<div className="news-nav">
				<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={setNewsLanguage("ja-JP")}>
							English
						</Dropdown.Item>
						<Dropdown.Item onClick={setNewsLanguage("en-US")}>
							Japanese
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			{coronaNews.map((news, idx) => {
				return (
					<Card
						style={({ border: "1px solid black" }, { width: "90%" })}
						className="news-card"
						key={idx}
					>
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
