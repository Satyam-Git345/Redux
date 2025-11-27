import { combineReducers, createStore } from "redux";
import { productsList } from "./Products";
import cartReducer, { ADDCARTITEM, DECREASECARTQTY, INCREASECARTQTY, REMOVECARTITEM } from "./reducers/cartReducer";
import wishListReducer, { ADDWISHLISTITEM, REMOVEWISHLISTITEM } from "./reducers/wishListReducer";
import productReducer from "./reducers/productReducer";

let initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const reducer=combineReducers({
    products:productReducer,
    wishlists:wishListReducer,
    carts:cartReducer    
})

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADDCARTITEM: {
//       const { ProductID } = action.payload;
//       const found = state.products.find((product) => product.id === ProductID);
//       if (found) {
//         return { ...state, cartItems: [...state.cartItems, action.payload] };
//       }
//       return state;
//     }
//     case REMOVECARTITEM: {
//       const { ProductID } = action.payload;
//       const found = state.cartItems.find(
//         (cartitem) => cartitem.ProductID === ProductID
//       );
//       if (found) {
//         const deleted = state.cartItems.filter(
//           (cartitem) => cartitem.ProductID !== ProductID
//         );
//         return { ...state, cartItems: deleted };
//       }
//       return state;
//     }

//     case INCREASECARTQTY: {
//       const { ProductID } = action.payload;
//       const found = state.cartItems.find(
//         (cartitem) => cartitem.ProductID === ProductID
//       );
//       if (found) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((cartitem) => {
//             if (cartitem.ProductID === ProductID) {
//               return { ...cartitem, quanty: cartitem.quanty + 1 };
//             }
//             return cartitem;
//           }),
//         };
//       } else {
//         console.log("Item not present in cart");
//       }
//     }
//     case DECREASECARTQTY: {
//       const { ProductID } = action.payload;
//       const found = state.cartItems.find(
//         (cartitem) => cartitem.ProductID === ProductID
//       );
//       if (found && found.quanty > 0) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((cartitem) => {
//             if (cartitem.ProductID === ProductID) {
//               return { ...cartitem, quanty: cartitem.quanty - 1 };
//             }
//             return cartitem;
//           }),
//         };
//       } else {
//         console.log("TRhere is only one item in cart ");
//       }
//     }
//     case ADDWISHLISTITEM: {
//       const { ProductID } = action.payload;
//       const found = state.products.find((product) => product.id === ProductID);
//       if (found) {
//         return { ...state, wishList: [...state.wishList, action.payload] };
//       }
//       return state;
//     }
//     case REMOVEWISHLISTITEM: {
//        const { ProductID } = action.payload;
//       const found = state.wishList.find(
//         (cartitem) => cartitem.ProductID === ProductID
//       );
//       if (found) {
//         const deleted = state.wishList.filter(
//           (cartitem) => cartitem.ProductID !== ProductID
//         );
//         return { ...state, wishList: deleted };
//       }
//       return state;
//     }

//     default: {
//       return state;
//     }
//   }
// }

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
store.dispatch({ type: ADDCARTITEM, payload: { ProductID: 1, quanty: 1 } });
store.dispatch({ type: ADDCARTITEM, payload: { ProductID: 5, quanty: 1 } });

store.dispatch({ type: REMOVECARTITEM, payload: { ProductID: 12 } });

store.dispatch({ type: INCREASECARTQTY, payload: { ProductID: 1 } });
store.dispatch({ type: INCREASECARTQTY, payload: { ProductID: 1 } });
store.dispatch({ type: INCREASECARTQTY, payload: { ProductID: 1 } });
store.dispatch({ type: DECREASECARTQTY, payload: { ProductID: 1 } });
// store.dispatch({ type: DECREASECARTQTY, payload: { ProductID: 12 } });
store.dispatch({ type: DECREASECARTQTY, payload: { ProductID: 1 } });


store.dispatch({ type: ADDWISHLISTITEM, payload: { ProductID: 1 } });
store.dispatch({ type: ADDWISHLISTITEM, payload: { ProductID: 2 } });
store.dispatch({ type: ADDWISHLISTITEM, payload: { ProductID: 3 } });

store.dispatch({ type:REMOVEWISHLISTITEM, payload: { ProductID: 1 } });

console.log(store.getState());
