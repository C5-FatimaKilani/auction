import React from "react";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Home;
