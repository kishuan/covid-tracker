import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react"; 

export default function News() {
    var [news, fetchNews] = useState(null);
    useEffect(() => {
      fetch(
        "https://www150.statcan.gc.ca/n1/dai-quo/ssi/homepage/daily-banner-eng.json"
      )
        .then((res) => res.json())
        .then(fetchNews)
        .catch((err) => console.error(err));
    }, []);
  
    if (news) {
      return (
        <>
          <Container>
            <Card>
              <Card.Header>Statistics Canada DAILY NEWS</Card.Header>
              <Card.Body>
                <Carousel variant="dark">
                  {news.daily.article.map((article) => (
                    <Carousel.Item key={article.title}>
                      <h3>{article.title}</h3>
                      <a href={`https://www150.statcan.gc.ca/n1/${article.link}`}>
                        <img
                          // style={{"box-shadow": "2px 2px"}}
                          className="rounded border border-light"
                          src={`https://www150.statcan.gc.ca/n1/${article.photo}`}
                          alt={article.title}
                        />
                      </a>
                      <hr />
                      <h3>{article.summary}</h3>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          </Container>
        </>
      );
    }
    return null;
  }
