import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";


export default function Dashboard() {
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
  