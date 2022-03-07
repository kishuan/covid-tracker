import Resources from "./subcomponents/Resources";
import Dashboard from "./subcomponents/Dashboard";
import Statistics from "./logical_components/Statistics";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Pages() {
  return (
    <Tabs defaultActiveKey="daily_statistics" id="tab" className="mb-3">
      <Tab eventKey="daily_statistics" title="Daily Statistics">
        <Statistics />
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
