import { useState } from "react";
import { List } from "react-window";
let products = Array.from({ length: 10000 }, (value, index) => {
  return {
    id: index + 1,
    name: `Product - ${index + 1}`,
    price: (Math.random() * 1000).toFixed(2),
    category: ["Men", "Women", "Kids", "Home"][index % 4],
  };
});

function RowComp({ index, style, products }) {
  let product = products[index];
  return (
    <section style={style} className="child">
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>Rs. {product.price}/-</p>
      <p>{product.category}</p>
      <p>
        <button>Remove</button>
      </p>
    </section>
  );
}
function LongList() {
  let [list, setList] = useState(products);
  return (
    <>
      <section className="table-area">
        <section className="header">
          <p>Sr No</p>
          <p>Name</p>
          <p>Price</p>
          <p>Category</p>
          <p>Action</p>
        </section>
        <section className="body">
          <List
            rowComponent={RowComp}
            rowCount={products.length}
            rowHeight={50}
            rowProps={{ products }}
          />
        </section>
      </section>
    </>
  );
}

export default LongList;
