import InputFilter from "./_components/InputFilter";
import ProductList from "./_components/ProductList";
import Button from "./Button";
export const metadata = {
  title: "Sản phẩm",
};
type Props = {
  searchParams: Promise<{ status: string }>;
};
export default async function ProductsPage({ searchParams }: Props) {
  const { status } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl text-red-600">Products</h1>
      <InputFilter />
      <p className="text-xl">Status: {status}</p>
      <Button />
      <ProductList />
    </div>
  );
}
