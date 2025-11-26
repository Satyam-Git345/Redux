import { createStore } from "redux";
import { productsList } from "./Products";

let initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const ADDCARTITEM = "cart/addItem";
const REMOVECARTITEM = "cart/removeItem";
const INCREASECARTQTY = "cart/increseqty";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDCARTITEM: {
      const { ProductID } = action.payload;
      const found = state.products.find((product) => product.id === ProductID);
      if (found) {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
      return state;
    }
    case REMOVECARTITEM: {
      const { ProductID } = action.payload;
      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );
      console.log("REMOVECARTITEM", found);
      if (found) {
        const deleted = state.cartItems.filter(
          (cartitem) => cartitem.ProductID !== ProductID
        );
        return { ...state, cartItems: deleted };
      }
      return state;
    }

    case INCREASECARTQTY: {
      const { ProductID } = action.payload;
      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );
      if(found){
         return {...state,cartItems:[...cartItems,]}
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("store", store);

store.subscribe(() => {
  console.log("State", store.getState());
});

store.dispatch({ type: ADDCARTITEM, payload: { ProductID: 12, quanty: 1 } });
store.dispatch({ type: ADDCARTITEM, payload: { ProductID: 13, quanty: 1 } });

store.dispatch({ type: REMOVECARTITEM, payload: { ProductID: 12 } });
store.dispatch({ type: REMOVECARTITEM, payload: { ProductID: 333 } });
store.dispatch({ type: REMOVECARTITEM, payload: { ProductID: 13 } });

console.log(store.getState());
