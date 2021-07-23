import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";
const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response =
      await axios.get`https://fakestoreapi.com/products/${productId}`.catch(
        (err) => {
          console.log("Err ", err);
        }
      );
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  return (
    <div className="productDetails">
      <div className="ddd"></div>
    </div>
  );
};
export default ProductDetails;
