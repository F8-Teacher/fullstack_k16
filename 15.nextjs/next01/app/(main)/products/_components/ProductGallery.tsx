"use client";

import Image from "next/image";
import { useState } from "react";

type Product = {
  title: string;
  thumbnail: string;
  price: number;
  id: number;
  message?: string;
  images: string[];
};
export default function ProductGallery({
  product: productInit,
}: {
  product: Product;
}) {
  const [product, setProduct] = useState<Product>(productInit);
  return (
    <>
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="h-75 w-auto"
          width={400}
          height={300}
        />
      </div>
      <div className="flex gap-2">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="w-17.5 border border-[#ccc] cursor-pointer"
            onClick={() => setProduct({ ...product, thumbnail: image })}
          >
            <Image src={image} alt={product.title} width={200} height={200} />
          </div>
        ))}
      </div>
    </>
  );
}
