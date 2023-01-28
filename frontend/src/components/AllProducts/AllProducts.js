import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import { setProducts } from "../../redux/reducers/products";
const AllProducts = () => {
const [image, setImage] = useState('')

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, token } = useSelector((state) => {
    return {
      products: state.products.products,
      token:state.auth.token
    };
  });

const addProduct = (productName, image) => {
  const result = axios.post('http://localhost:5000/products', {
    productName:productName,
    image:image
  }, {headers: {
    authorization: `Bearer ${token}`
  }})
  .then((result)=> {
    console.log(result);
console.log("added");
  })
  .catch((err)=>{
    console.log(err);
  })
}

  const productss = () => {
    axios
      .get("http://localhost:5000/products")
      .then((result) => {
        console.log(result);
        dispatch(setProducts(result.data.result));
      })
      .catch((err) => {});
  };

  useEffect(() => {
    productss();
  }, []);

  return (
    <div>
     
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Form.Label><strong> Product Name : </strong></Form.Label>
        <br/>
        <br/>
          <Modal.Title as="textarea" placeholder="Product Name here"></Modal.Title>
        </Modal.Header>
        <Form.Label><strong>Post link of the product image here ... </strong></Form.Label>
        <Modal.Body as="textarea" placeholder="here..." onChange={(e)=>{setImage(e.target.value)          
        }}> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Save and Create
          </Button>
        </Modal.Footer>
      </Modal>
    
      {products.length &&
        products.map((product) => {
          return (
            <div>
              <p>{product.user_product_id
}</p>
            <p>{  product.productName} </p>
            <img src={product.image}/>
            </div>
           
          )
        })}
    </div>
  );
};

export default AllProducts;
