import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";

const Block3 = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#03270b" }}>
      <Container>
        <h1 className="mx-auto">3</h1>
        <form>
          <label>
            Ім'я:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Надіслати" />
          <input type="file" />
        </form>
      </Container>
    </div>
  );
};

export default Block3;
