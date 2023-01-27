import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loggedIn } from "../../redux/reducers/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageEmail, setMessageEmail] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { token, isLoggedIn, isSeller } = useSelector((state) => {
    return {
      token: state.auth.token,
      isLoggedIn: state.auth.isLoggedIn,
      isSeller: state.auth.isSeller,
    };
  });

  const login = async (e) => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      if (res) {
        setMessage("");
        dispatch(
          loggedIn({ token: res.data.token, isSeller: res.data.isSeller })
        );
        navigate("/products");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };

  return (
    <div>
      Login
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              if (
                e.target.value !== " " ||
                e.target.value !== "" ||
                e.target.value.includes("@") ||
                e.target.value.includes(".com")
              ) {
                setEmail(e.target.value);
                setMessageEmail("");
              } else {
                setMessageEmail("   includes : @ / .com ");
              }
            }}
          />
          <p>{messageEmail}</p>
          <br />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              if (
                e.target.value.length < 4 ||
                e.target.value == " " ||
                e.target.value == ""
              ) {
                return setMessage(" Password haven't less than 8 characters");
              } else {
                setMessage("");
                setPassword(e.target.value);
              }
            }}
          />
          <p>{message}</p>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            login();
          }}
        >
          Login
        </Button>
      </Form>
      ;
    </div>
  );
};

export default Login;
