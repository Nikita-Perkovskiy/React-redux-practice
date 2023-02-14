import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFilm } from "react-icons/bs";
import { colors } from "../../Helpers/colors";

const Header = (props) => {
  return (
    <Container>
      <Row>
        <Col xxl={3} className="d-flex justify-content-start mt-3">
          <Row>
            <div className="d-flex justify-content-start  align-items-center">
              <BsFilm size={50} color={colors.mainColor} />
              <h3 className="mx-3 ">Cinema Mall</h3>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
