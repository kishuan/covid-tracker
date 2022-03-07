import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";

export default function Statistics() {
  // this function will query the updates for a specific province
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
                              {
                                dataByProvince.data[index.api_key]
                                  .total_criticals
                              }{" "}
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
  // this function will query the updates for the total provinces
  function StatisticsAllProvinces() {
    const [data, fetchData] = useState(null);
    useEffect(() => {
      fetch("https://api.covid19tracker.ca/summary", {
        headers: { accept: "Accept: application/json" },
      })
        .then((res) => res.json())
        .then(fetchData)
        .catch((err) => {
          console.error(err);
        });
    }, []);

    if (data) {
      return (
        <>
          <Container>
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
          </Container>
        </>
      );
    } else {
      <div>Failed to retrieve data.</div>;
    }
    return null;
  }

  return (
    <>
    <StatisticsAllProvinces/>
    <StatisticsByProvince/>
    </>
  );

}
