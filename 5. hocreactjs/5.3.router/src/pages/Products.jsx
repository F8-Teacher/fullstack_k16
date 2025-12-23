import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams({
      status: searchParams.get("status"),
      keyword: value,
    });
  };
  return (
    <div>
      <h1>Products</h1>
      <input
        type="search"
        placeholder="Nhập từ khóa..."
        onChange={handleSearch}
      />
      <p>Status: {searchParams.get("status")}</p>
      <p>Keyword: {searchParams.get("keyword")}</p>
    </div>
  );
}
//slug
