import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoFlowerSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const Header = (props) => {
  const { basketIsFull, basketCount, addbasketCount, activeBasketIsFull } =
    props;

  const handleactiveBasketIsFull = (event) => {
    activeBasketIsFull();
    console.log("hb");
  };

  return (
    <Container>
      <Row>
        <Col xxl={3} className="d-flex justify-content-start">
          <IoFlowerSharp size={100} color="#0b483f" />
        </Col>
        <Col xxl={9} className="d-flex justify-content-end">
          {basketIsFull ? (
            <button className="btn" onClick={handleactiveBasketIsFull}>
              <BsFillCartCheckFill size={100} color="#0b483f" />
            </button>
          ) : (
            <button className="btn" onClick={handleactiveBasketIsFull}>
              <BsFillCartFill size={100} color="#0b483f" />
            </button>
          )}
          <div className="d-flex align-items-center">
            <h3>{basketCount}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
