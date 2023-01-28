import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [phoneNum, setPhoneNum] = useState(``);
  const [email, setEmail] = useState(``);
  const [role_id, setRole_id] = useState(``);
  const [pass, setPass] = useState(``);
  const [message, setMessage] = useState(``);
  const [messageEmail, setMessageEmail] = useState("");
  const [messagefName, setMessagefName] = useState("");
  const [messagelName, setMessagelName] = useState("");
  const [messagePhone, setMessagePhone] = useState(``);
  const [messagePass, setMessagePass] = useState(``);

  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  const addNewUser = async (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, phoneNum, pass, role_id });
    try {
      const res = await axios.post(`http://localhost:5000/register`, {
        firstName,
        lastName,
        email,
        phoneNum,
        pass,
        role_id,
      });
      console.log(res);
      if (
        res &&
        firstName.replaceAll(" ", "").length != 0 &&
        lastName.replaceAll(" ", "").length != 0 &&
        email.includes("@", ".com") &&
        phoneNum.replaceAll(" ", "").length != 0 &&
        pass.length > 8
      ) {
        setMessage("The user has been created successfully");
      } else throw Error;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="register">
        {!isLoggedIn ? (
          <>
            <strong>Register</strong>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onSubmit={addNewUser}
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first Name ..."
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (e.target.value == " " || e.target.value.includes(" ")) {
                      return setMessagefName(
                        "  الرجاء إدخال الإسم الأول من مقطع واحد"
                      );
                    } else if (
                      e.target.value != " " &&
                      !e.target.value.includes(" ")
                    ) {
                      return setMessagefName("");
                    } else {
                      setFirstName(e.target.value);
                    }
                  }}
                />
                <p>{messagefName}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Last Name ..."
                  onChange={(e) => {
                    setLastName(e.target.value);

                    if (e.target.value == " " || e.target.value.includes(" ")) {
                      return setMessagelName(
                        "  الرجاء إدخال الإسم الأول من مقطع واحد"
                      );
                    } else if (
                      e.target.value != " " &&
                      !e.target.value.includes(" ")
                    ) {
                      return setMessagelName("");
                    } else {
                      setLastName(e.target.value);
                    }
                  }}
                />
                <p>{messagelName}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (
                      e.target.value == " " ||
                      e.target.value == "" ||
                      !e.target.value.includes("@") ||
                      !e.target.value.includes(".com")
                    ) {
                      return setMessageEmail(
                        "   The email have to include(@ / .com)"
                      );
                    } else if (
                      e.target.value != " " &&
                      e.target.value != "" &&
                      e.target.value.includes("@") &&
                      e.target.value.includes(".com")
                    ) {
                      setMessageEmail("");
                    } else {
                      setEmail(e.target.value);
                    }
                  }}
                />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <p>{messageEmail}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your phone number ..."
                  onChange={(e) => {
                    setPhoneNum(e.target.value);

                    if (e.target.value == " " || e.target.value == "") {
                      return setMessagePhone("   Can not be empty");
                    } else if (e.target.value != " " && e.target.value != "") {
                      setMessagePhone("");
                    } else {
                      setPhoneNum(e.target.value);
                    }
                  }}
                />
                <p>{messagePhone}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPass(e.target.value);

                    if (
                      e.target.value.length < 8 ||
                      e.target.value == " " ||
                      e.target.value == ""
                    ) {
                      return setMessagePass(
                        " the pasword mustn't  be less than 8 characters"
                      );
                    } else if (
                      e.target.value.length > 8 &&
                      e.target.value != " " &&
                      e.target.value != ""
                    ) {
                      setMessage("");
                    } else {
                      setPass(e.target.value);
                    }
                  }}
                />
                <p>{messagePass}</p>
              </Form.Group>

              <Form>
                {["radio"].map((type) => (
                  <div
                    onChange={(e) => {
                      setRole_id(e.target.value);
                    }}
                    key={`inline-${type}`}
                    className="mb-3"
                  >
                    <Form.Check
                      inline
                      label="Seller"
                      value={1}
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Buyer"
                      value={2}
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  addNewUser(e);
                }}
              >
                Submit
              </Button>
            </Form>
          </>
        ) : (
          <p> Please ... logout first </p>
        )}
      </div>
    </>
  );
};

export default Register;
