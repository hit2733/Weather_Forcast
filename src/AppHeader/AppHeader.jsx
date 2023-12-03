import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const AppHeader = ({ searchLocation, cityName }) => {
  const searchHandler = (e) => {
    cityName(e.target.value);
  };

  const btnClickHandler = () => {
    searchLocation();
  };

  return (
    <div className="bg-danger" style={{ marginBottom: "0" }}>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{
                color: "white",
                fontWeight: "1000",
                fontSize: "25px",
                textShadow: "rgb(240, 46, 170, 0.4) 5px 0px 1px",
              }}
            >
              Weather Forecast
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Search Your city
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-flex justify-content-center">
                  {" "}
                  {/* Center the search box */}
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search city"
                      className="me-2"
                      aria-label="Search"
                      onChange={searchHandler}
                    />
                    <Button
                      style={{
                        background: "white",
                        width: "5em",
                        height: "1.8em",
                      }}
                      className="btn-close"
                      variant="outline-success"
                      onClick={btnClickHandler}
                    >
                      Search
                    </Button>
                  </Form>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default AppHeader;
