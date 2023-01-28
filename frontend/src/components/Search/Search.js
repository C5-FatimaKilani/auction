import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

const Search = () => {
  const [filtered, setFiltered] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products`)
      .then((result) => {
        setFilteredProducts(result.data.result);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Your Auction</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">All Products</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  const newFilteredProducts = filteredProducts.filter((element) => {
                    if (e.target.value != "")
                      return element.productName.includes(e.target.value) ;
                  });
              
                  setFiltered(newFilteredProducts);
                }}
                className="me-2"
                aria-label="Search"
              />
              <div className="searchResult">
                {filtered.length
                  ? filtered.map((element) => {
                      return (
                        <p
                          className="searchRes"
                          onClick={() => {
                            setInputVal("");
                            navigate(`/products/${element.id}`);
                            window.location.reload(false);

                            setFiltered("");
                          }}
                        >
                          {element.productName}
                        </p>
                      );
                    })
                  : ""}
              </div>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Search;
