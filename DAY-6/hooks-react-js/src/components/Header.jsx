import React, { memo } from "react";

function Header() {
  console.log("header");
  return <div>Products</div>;
}

export default memo(Header);

// memorize functional comp => memo (hoc)
// memorize a class component => PureComponent
// memorize value => useMemo
// memorize a function => useCallback
