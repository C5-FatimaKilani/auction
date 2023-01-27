import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/reducers/products";
const AllProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });

  const productss = () => {
    axios
      .get("http://localhost:5000/products")
      .then((result) => {
        console.log(result);
        dispatch(setProducts(result.data.products));
      })
      .catch((err) => {});
  };

  useEffect(() => {
    productss();
  }, []);

  return (
    <div>
      AllProducts
      {products.length &&
        products.map((product) => {
          return { product };
        })}
    </div>
  );
};

export default AllProducts;