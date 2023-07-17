import { Row, Col, InputGroup, Form, Container } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import IMAGES from '../../../assets/images';

const Header = () => {

  return (
    <div className="header py-3">
      <Container fluid>
        <Row>
          <Col md={6} className="d-flex justify-content-start px-5">
            <InputGroup className="mb-3 search_bar position-relative secondary_color">
              <Form.Control
                className="search_input custom_radius"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <BiSearch className="search_icon fs-3 position-absolute" />
            </InputGroup>
          </Col>

          <Col md={6} className="d-flex align-items-center justify-content-end">
            <div className="notification_bell position-relative me-4">
              <img className="cursor_pointer" width={19} src={IMAGES.BELL} alt="Bell Icon" />
              <img className="position-absolute cursor_pointer bell_dot" height={9} width={9} src={IMAGES.BELL_DOT} alt="Bell Dot" />
            </div>

            <div className="d-flex align-items-center mx-4">
              <div className="text-end me-4">
                <h6 className="mb-0">Andrew Wilson</h6>
                <p className="mb-0 secondary_color">Latus staff</p>
              </div>
              <img width={48} src={IMAGES.USER_PROFILE} alt="User" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
