import React, { useEffect } from "react";
import "./productListing.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="productListing">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
