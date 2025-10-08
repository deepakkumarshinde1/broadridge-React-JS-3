import { useProductContext } from "../context/product.context";

function Header(props) {
  let { cart, handelCartCount } = useProductContext();
  return (
    <>
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cart.length === 0 && (
                <p className="text-center text-danger mt-3">
                  No Product Added to Cart
                </p>
              )}
              {cart.map((cartProduct, index) => {
                return (
                  <section
                    key={index}
                    className="mb-2 d-flex align-items-center justify-content-between px-4"
                  >
                    <section className="d-flex gap-3 align-items-center">
                      <img
                        src={cartProduct.image}
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                      />
                      <span className="text-primary h5">
                        {cartProduct.title}
                      </span>
                    </section>
                    <span className="d-flex gap-3 align-items-center">
                      <button
                        onClick={() => handelCartCount(index, "add")}
                        className="btn btn-sm btn-outline-success"
                      >
                        +
                      </button>
                      {cartProduct.count}
                      <button
                        onClick={() => handelCartCount(index, "sub")}
                        className="btn btn-sm btn-outline-danger"
                      >
                        -
                      </button>
                    </span>
                  </section>
                );
              })}
            </div>

            {cart.length > 0 && (
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Process
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="row">
        <section className="col-12 d-flex align-items-center px-5 py-2 border-bottom border-2 border-secondary">
          <span className="h3 w-10">{props.brandName}</span>
          <nav className="d-flex justify-content-between w-90 align-items-center">
            <ul className="list-unstyled d-flex mb-0 gap-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="d-flex list-unstyled mb-0 gap-3">
              <li>
                <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal">
                  Cart {cart.length}
                </a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Create Account</a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}

export default Header;
