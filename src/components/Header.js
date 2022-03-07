import Navbar from "react-bootstrap/Navbar";
import { GraphUpArrow } from "react-bootstrap-icons"; 

let tracker = {
    name: "COVID-19 TRACKER CANADA",
    country: "Canada",
  };

export default function Header() {
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