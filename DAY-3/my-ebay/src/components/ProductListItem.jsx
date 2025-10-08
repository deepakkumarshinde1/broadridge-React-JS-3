import { useProductContext } from "../context/product.context";

function ProductListItem({ product }) {
  let { addToCart } = useProductContext();
  return (
    <div className="card p-2" style={{ width: "18rem" }}>
      <img
        src={product.images[0]}
        className="card-img-top"
        style={{ height: "35vh" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.category.name}</p>
        <p>Rs {product.price * 87}/-</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Add Cart
        </a>
      </div>
    </div>
  );
}

export default ProductListItem;
