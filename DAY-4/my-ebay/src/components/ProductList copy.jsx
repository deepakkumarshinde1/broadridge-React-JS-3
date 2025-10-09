import { Component } from "react";
import ProductListItem from "./ProductListItem";
import api from "../config/axios.config";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
      error: null,
    };
  }

  getProductList = async () => {
    try {
      let response = await api.get("/products");
      console.log(response);
      this.setState({
        list: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        list: [],
        loading: false,
        error: error.message,
      });
    }
  };
  componentDidMount() {
    this.getProductList();
  }
  render() {
    if (this.state.loading)
      return (
        <p className="text-danger text-center mt-5 h1">
          Loading... please wait
        </p>
      );
    if (this.state.error)
      return (
        <p className="text-danger text-center mt-5 h1">{this.state.error}</p>
      );
    return (
      <section className="row">
        <section className="col-12 d-flex flex-wrap justify-content-center gap-4 my-5 w-100 ">
          {this.state.list.map((product) => {
            return <ProductListItem product={product} />;
          })}
        </section>
      </section>
    );
  }
}

export default ProductList;
