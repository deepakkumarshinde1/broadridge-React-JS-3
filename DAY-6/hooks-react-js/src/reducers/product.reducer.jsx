export const initialState = {
  list: [],
};
export const productAction = {
  SAVE: "SAVE",
  REMOVE: "REMOVE",
  ADD_CART: "ADD_TO_CART",
};
// action => {type:"", payload:any}
export const reducer = (state, action) => {
  let { type, payload } = action;
  let _list = [...state.list];

  switch (type) {
    case productAction.SAVE:
      return { ...state, list: payload };

    case productAction.REMOVE:
      _list.splice(payload, 1);
      return { ...state, list: _list };

    case productAction.ADD_CART:
      _list[payload]["cart"] = true;
      return { ...state, list: _list };

    default:
      return state;
  }
};
