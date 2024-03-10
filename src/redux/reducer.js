let all = 20000;
const initStore = {
  cash: 20000,
  take: 0,
  products: [],
};
export const Reducer = (state = initStore, action) => {
  switch (action.type) {
    case "TO_DO":
      if (action.payload.price > state.cash) {
        alert(" You do not enough money !!! ");
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
          take: state.take + +action.payload.price,
          cash: state.cash - +action.payload.price,
        };
      }
    case "DELETE_PRODUCT":
      let findProduct = state.products.find((el) => el.id === action.payload);
      if (findProduct) {
        let filterProduct = state.products.filter(
          (el) => el.id !== action.payload
        );
        return {
          ...state,
          products: filterProduct,
          cash: state.cash + +findProduct.price,
          take: state.take - +findProduct.price,
        };
      }
    case "EDIT_PRODUCT":
      let findEdit = state.products.find((el) => el.id === action.payload.id);
      if (findEdit) {
        let changeProduct = state.products.map((el) =>
          el.id === action.payload.id
            ? { ...el, name: action.payload.name, price: action.payload.price }
            : el
        );
        return {
          ...state,
          products: changeProduct,
          take: state.take - +action.payload.price,
          cash: state.cash + +action.payload.price,
        };
      }
    default:
      return state;
  }
};
