import { notFound } from "next/navigation";
import ProductGallery from "../_components/ProductGallery";

type Props = {
  params: Promise<{ id: number }>;
};
type Product = {
  title: string;
  thumbnail: string;
  price: number;
  id: number;
  message?: string;
  images: string[];
};
const getProduct = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Có lỗi khi gọi product detail");
  }
};
export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  if (product.message) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-3xl">{product.title}</h1>
      <p>Price: {product.price}</p>
      <ProductGallery product={product} />
    </div>
  );
}
