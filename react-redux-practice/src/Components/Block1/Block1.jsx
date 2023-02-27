import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../../selects";
import { actionIncrease, actionDecrease } from "../../reducers";

const Block1 = () => {
  //const props = { count, countIncrease, countDecrease };
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);

  const increase = () => {
    //  countIncrease(count);
    dispatch(actionIncrease());
  };
  

  const decrease = () => {
    //countDecrease(count);
    dispatch(actionDecrease());
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

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     countIncrease: bindActionCreators(countIncrease, dispatch),
//     countDecrease: bindActionCreators(countDecrease, dispatch),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Block1);

export default Block1;
