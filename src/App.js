// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
// import Alert from "react-bootstrap/Alert";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "./about.txt";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { GraphUpArrow } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
// import AccordionCollapse from "react-bootstrap/esm/AccordionCollapse";

let tracker = {
  name: "COVID-19 TRACKER CANADA",
  country: "Canada",
};

function Pages() {
  return (
    <Tabs defaultActiveKey="daily_statistics" id="tab" className="mb-3">
      <Tab eventKey="daily_statistics" title="Daily Statistics">
        <Statistics />
        <StatisticsByProvince />
      </Tab>
      <Tab eventKey="mental_health_dashboard" title="Mental Health Dashboard">
        <Dashboard />
      </Tab>
      <Tab eventKey="resources" title="Resources+">
        <Resources />
      </Tab>
    </Tabs>
  );
}

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClose = () => setShowHelp(false);
  const handleHelpShow = () => setShowHelp(true);
  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            Canadians' Health and COVID-19: Interactive Dashboard
          </Card.Header>
          <Card.Body>
            <ButtonGroup>
              <Button variant="primary" onClick={handleShow}>
                What is this?
              </Button>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>About</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This dashboard presents selected health indicators for the
                  Canadian population living in the ten provinces related to the
                  COVID-19 pandemic. It includes estimates of the population
                  aged 12 and older, by region and province, age group and
                  gender. The indicators of health included show how Canadians
                  rate their current mental health compared to before the
                  pandemic - worse, the same, or better. It also shows what
                  percentage of Canadians reported taking various precautions to
                  protect against COVID-19, what percentage indicated having
                  received a test for COVID, as well as the rate of those
                  somewhat or very likely to get a vaccine. The data for this
                  dashboard are based on the Canadian Community Health Survey, a
                  annual population health survey that was adapted during the
                  COVID-19 pandemic to produce more timely estimates with new
                  content related to the evolving situation. Estimates in this
                  dashboard are presented beginning from September 2020 and will
                  be updated with each completed collection period available
                  from the survey.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="warning" onClick={handleHelpShow}>
                How to use
              </Button>
              <Modal show={showHelp} onHide={handleHelpClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>How to use this application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This visualization gives users the option of looking at the
                  data for the indicators they choose for all the collection
                  periods in a time series, or by collection period in a series
                  of bar charts with indicators grouped by theme. Users can
                  change between levels of geography (region or province), age
                  group, or gender using the drop down boxes at the top of this
                  report.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleHelpClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </ButtonGroup>
            <hr />
            <iframe
              title="statcan_dashboard"
              width="100%"
              height="1500"
              src="https://dv-vd.cloud.statcan.ca/71-607-x2021003_en"
            ></iframe>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

function News() {
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

function About() {
  var [aboutText, fetchAbout] = useState(null);

  useEffect(() => {
    fetch(about)
      .then((res) => {
        return res.text();
      })
      .then(fetchAbout)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {aboutText}
      For more information about how this data is collected, please click{" "}
      <a href="https://covid19tracker.ca/sources.html">here.</a>
    </>
  );
}

function Resources() {
  return (
    <Tab.Container id="listGroup" defaultActiveKey="#map">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroupItem variant="primary" action href="#map">
              COVID-19 Worldwide Map
            </ListGroupItem>
            <ListGroup.Item variant="primary" action href="#global">
              COVID-19 Worldwide Statistics
            </ListGroup.Item>
            <ListGroupItem variant="primary" action href="#news">
              Statistics Canada News
            </ListGroupItem>
            <ListGroup.Item variant="primary" action href="#links">
              Relevant Links
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#map">
              <Card>
                <Card.Header>World Map</Card.Header>
                <Card.Body>
                  <iframe
                    title="worldMap"
                    src="https://public.domo.com/cards/bWxVg"
                    width="100%"
                    height="1000"
                    marginHeight="0"
                    marginWidth="0"
                    frameBorder="0"
                  ></iframe>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="#global">
              <Card>
                <Card.Header>World Statistics</Card.Header>
                <Card.Body>
                  <iframe
                    title="worldMetrics"
                    src="https://public.domo.com/cards/aOm4g"
                    width="100%"
                    height="600"
                    marginHeight="0"
                    marginWidth="0"
                    frameBorder="0"
                  ></iframe>
                  <iframe
                    title="worldTable"
                    src="https://public.domo.com/cards/dJ45D"
                    width="100%"
                    height="900"
                    marginHeight="0"
                    marginWidth="0"
                    frameBorder="0"
                  ></iframe>
                  <iframe
                    title="worldGraph"
                    src="https://public.domo.com/cards/avnAV"
                    width="100%"
                    height="500"
                    marginHeight="0"
                    marginWidth="0"
                    frameBorder="0"
                  ></iframe>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="#news">
              <News />
            </Tab.Pane>
            <Tab.Pane eventKey="#links">
              <Card>
                <Card.Header>Links</Card.Header>
                <Card.Body>Coming soon!</Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
// function deezNuts(){
//   return axios.get("https://api.covid19tracker.ca/summary").then(data => console.log(data));
// }
function Statistics() {
  const [data, fetchData] = useState(null);
  useEffect(() => {
    axios.get("https://api.covid19tracker.ca/summary")
      .then(fetchData)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (data) {
    return (
      <>
        <div>{data.data.last_updated}</div>
        {/* <Container>
          <Alert variant="success">
            <Alert.Heading>
              Last updated: {data.last_updated} (CST)
            </Alert.Heading>
          </Alert>
        </Container>

        <Container>
          <Accordion defaultActiveKey={["All"]} alwaysOpen>
            <Accordion.Item eventKey="All">
              <Accordion.Header>
                Canada (All Provinces and Territories)
              </Accordion.Header>
              <Accordion.Body>
                <div className="table">
                  <h2>Summary (All Provinces and Territories)</h2>
                  <Table striped bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>Cases</td>
                        <td>
                          {data.data[0].total_cases} (
                          {data.data[0].change_cases})
                        </td>
                      </tr>
                      <tr>
                        <td>Fatalities</td>
                        <td>
                          {data.data[0].total_fatalities} (
                          {data.data[0].change_fatalities})
                        </td>
                      </tr>
                      <tr>
                        <td>Tests</td>
                        <td>
                          {data.data[0].total_tests} (
                          {data.data[0].change_tests})
                        </td>
                      </tr>
                      <tr>
                        <td>Hospitalizations</td>
                        <td>
                          {data.data[0].total_hospitalizations} (
                          {data.data[0].change_hospitalizations})
                        </td>
                      </tr>
                      <tr>
                        <td>Critical</td>
                        <td>
                          {data.data[0].total_criticals} (
                          {data.data[0].change_criticals})
                        </td>
                      </tr>
                      <tr>
                        <td>Recoveries</td>
                        <td>
                          {data.data[0].total_recoveries} (
                          {data.data[0].change_recoveries})
                        </td>
                      </tr>
                      <tr>
                        <td>Vaccinations</td>
                        <td>
                          {data.data[0].total_vaccinations} (
                          {data.data[0].change_vaccinations})
                        </td>
                      </tr>
                      <tr>
                        <td>Fully Vaccinated</td>
                        <td>
                          {data.data[0].total_vaccinated} (
                          {data.data[0].change_vaccinated})
                        </td>
                      </tr>
                      <tr>
                        <td>Boosters</td>
                        <td>
                          {data.data[0].total_boosters_1} (
                          {data.data[0].change_boosters_1})
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container> */}
      </>
    );
  } else {
    <div>Failed to retrieve data.</div>;
  }
  return null;
}

function StatisticsByProvince() {
  const [dataByProvince, fetchDataByProvince] = useState(null);

  useEffect(() => {
    fetch("https://api.covid19tracker.ca/summary/split")
      .then((res) => res.json())
      .then(fetchDataByProvince)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  var provinces = [
    {
      id: 1,
      province: "Alberta",
      api_key: 8,
    },
    {
      id: 2,
      province: "British Columbia",
      api_key: 5,
    },
    {
      id: 3,
      province: "Manitoba",
      api_key: 4,
    },
    {
      id: 4,
      province: "New Brunswick",
      api_key: 3,
    },
    {
      id: 5,
      province: "Newfoundland and Labrador",
      api_key: 9,
    },
    {
      id: 6,
      province: "Novia Scotia",
      api_key: 2,
    },
    {
      id: 7,
      province: "Ontario",
      api_key: 0,
    },
    {
      id: 8,
      province: "Prince Edward Island",
      api_key: 6,
    },
    {
      id: 9,
      province: "Quebec",
      api_key: 1,
    },
    {
      id: 10,
      province: "Saskatchewan",
      api_key: 7,
    },
    {
      id: 11,
      province: "Nunavut",
      api_key: 12,
    },
    {
      id: 12,
      province: "Northwest Territories",
      api_key: 10,
    },
    {
      id: 13,
      province: "Yukon",
      api_key: 11,
    },
  ];

  if (dataByProvince) {
    return (
      <>
        <Container>
          <Accordion>
            {provinces.map((index) => (
              <Accordion.Item eventKey={index.id} key={index.api_key}>
                <Accordion.Header>
                  {index.province} (
                  {dataByProvince.data[index.api_key].province})
                </Accordion.Header>
                <Accordion.Body>
                  <h2>{index.province}</h2>
                  <div className="table">
                    <Table striped bordered hover variant="dark">
                      <tbody>
                        <tr>
                          <td>Cases</td>
                          <td>
                            {dataByProvince.data[index.api_key].total_cases} (
                            {dataByProvince.data[index.api_key].change_cases})
                          </td>
                        </tr>
                        <tr>
                          <td>Fatalities</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_fatalities
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_fatalities
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Tests</td>
                          <td>
                            {dataByProvince.data[index.api_key].total_tests} (
                            {dataByProvince.data[index.api_key].change_tests})
                          </td>
                        </tr>
                        <tr>
                          <td>Hospitalizations</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_hospitalizations
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_hospitalizations
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Critical</td>
                          <td>
                            {dataByProvince.data[index.api_key].total_criticals}{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_criticals
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Recoveries</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_recoveries
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_recoveries
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Vaccinations</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_vaccinations
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_vaccinations
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Fully Vaccinated</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_vaccinated
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_vaccinated
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <td>Boosters</td>
                          <td>
                            {
                              dataByProvince.data[index.api_key]
                                .total_boosters_1
                            }{" "}
                            (
                            {
                              dataByProvince.data[index.api_key]
                                .change_boosters_1
                            }
                            )
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </>
    );
  } else {
    <div>Failed to retreive data by province.</div>;
  }
  return null;
}

function Header() {
  return (
    <>
      <div>
        <Navbar className="navbar">
          <h3>
            {tracker.name} <GraphUpArrow />
          </h3>
        </Navbar>
      </div>
    </>
  );
}

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="footer">
      <h3>
        Created with React.js by{" "}
        <a
          href="https://github.com/kishuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kishuan Matteo Espiritu
        </a>{" "}
        | API from{" "}
        <a
          href="https://api.covid19tracker.ca/docs/1.0/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          covid19tracker
        </a>
        |{" "}
        <a
          href="#about"
          data-toggle="modal"
          data-target="#aboutModal"
          onClick={handleShow}
        >
          About
        </a>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          id="aboutModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <About />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
