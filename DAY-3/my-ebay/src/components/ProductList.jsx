import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import api from "../config/axios.config";

function ProductList() {
  let [productDetails, setProductsDetails] = useState({
    list: [],
    loading: true,
    error: null,
  });

  let getProductList = async () => {
    try {
      let response = await api.get("/products");
      console.log(response);
      setProductsDetails({
        list: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setProductsDetails({
        list: [],
        loading: false,
        error: error.message,
      });
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  if (productDetails.loading)
    return (
      <p className="text-danger text-center mt-5 h1">Loading... please wait</p>
    );

  if (productDetails.error)
    return (
      <p className="text-danger text-center mt-5 h1">{productDetails.error}</p>
    );

  return (
    <section className="row">
      <section className="col-12 d-flex flex-wrap justify-content-center gap-4 my-5 w-100 ">
        {productDetails.list.map((product) => {
          return <ProductListItem key={product._id} product={product} />;
        })}
      </section>
    </section>
  );
}

export default ProductList;
