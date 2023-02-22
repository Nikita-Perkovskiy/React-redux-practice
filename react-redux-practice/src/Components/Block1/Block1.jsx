import React from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { countIncrease, countDecrease } from "../../store/store";
import { bindActionCreators } from "redux";

const Block1 = ({ count, countIncrease, countDecrease }) => {
  const increase = () => {
    countIncrease(count);
  };

  const decrease = () => {
    countDecrease(count);
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#270303" }}>
      <Container>
        <div className="mx-auto" style={{ width: "200px" }}>
          <h1 className="mx-auto" style={{ color: "#fefefefe", width: "40px" }}>
            {count}
          </h1>
          <div className="mx-auto" style={{ width: "100px" }}>
            <Button className="mx-1" onClick={increase}>
              +
            </Button>
            <Button className="mx-1" onClick={decrease}>
              -
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countIncrease: bindActionCreators(countIncrease, dispatch),
    countDecrease: bindActionCreators(countDecrease, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Block1);
