import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  thumbnail: string;
  price: number;
  id: number;
};
const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    return data.products;
  } catch {
    throw new Error("Có lỗi khi gọi products");
  }
};
export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="w-[1/4] mb-3">
          <Image
            src={product.thumbnail}
            width={300}
            height={300}
            alt={product.title}
          />
          <Link href={`/products/${product.id}`} className="text-xl">
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
