import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Chi tiết sản phẩm: {productId}</h1>
      <Link to={`/order/${productId}`}>Mua hàng</Link>
    </div>
  );
}
