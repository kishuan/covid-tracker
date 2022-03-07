import About from "./subcomponents/About";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useReducer } from "react";
  
export default function Footer() {
  const [expanded, toggle] = useReducer((collapse) => !collapse, false);

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
            onClick={toggle}
          >
            About
          </a>
          <Modal
            show={expanded}
            onHide={toggle}
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
              <Button variant="secondary" onClick={toggle}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </h3>
      </div>
    );
  }