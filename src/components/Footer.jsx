import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
            Success is not final, failure is not fatal: it's the courage to continue that counts!
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
