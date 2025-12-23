import { useParams } from "react-router-dom";

export default function Order() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Đặt hàng: {productId}</h1>
    </div>
  );
}
