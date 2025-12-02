import { combineReducers, createStore } from "redux";

import cartReducer, {
  AddNewCartItem,
  decreaseCartItemQty,
  increaseCartItemQty,
} from "./store/reducers/cartReducer";
import wishListReducer, {
  AddwishListTiem,
  RemovewishListTiem,
} from "./store/reducers/wishListReducer";
import productReducer from "./store/reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
  wishlists: wishListReducer,
  carts: cartReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("store", store);

store.subscribe(() => {
  console.log("State", store.getState());
});

store.dispatch(AddNewCartItem(12, 1));
store.dispatch(AddNewCartItem(13, 1));
store.dispatch(AddNewCartItem(14, 9));
store.dispatch(AddNewCartItem(12, 9));
store.dispatch(AddNewCartItem(18, 10));

store.dispatch(increaseCartItemQty(12));

store.dispatch(increaseCartItemQty(12));

store.dispatch(increaseCartItemQty(13));

store.dispatch(increaseCartItemQty(13, 2));

store.dispatch(increaseCartItemQty(14, 2));

store.dispatch(increaseCartItemQty(12, 5));

store.dispatch(increaseCartItemQty(18));
store.dispatch(increaseCartItemQty(18));
store.dispatch(increaseCartItemQty(18));
store.dispatch(increaseCartItemQty(18));
// store.dispatch({ type: DECREASECARTQTY, payload: { ProductID: 12 } });
store.dispatch(decreaseCartItemQty(12));
store.dispatch(decreaseCartItemQty(13));
store.dispatch(decreaseCartItemQty(14));
store.dispatch(decreaseCartItemQty(12));
store.dispatch(decreaseCartItemQty(12));

store.dispatch(AddwishListTiem(1));
store.dispatch(AddwishListTiem(2));
store.dispatch(AddwishListTiem(12));
store.dispatch(AddwishListTiem(17));

store.dispatch(AddwishListTiem(18));

store.dispatch(RemovewishListTiem(1));
store.dispatch(RemovewishListTiem(18));
console.log(store.getState());
