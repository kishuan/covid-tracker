import News from "../logical_components/News";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Resources() {
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