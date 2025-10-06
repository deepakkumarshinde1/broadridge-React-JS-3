import { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="row">
        <section className="col-12 d-flex flex-wrap justify-content-center gap-4 my-5 w-100 ">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </section>
      </section>
    );
  }
}

export default ProductList;
