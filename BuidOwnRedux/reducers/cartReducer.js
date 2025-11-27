import { productsList } from "../Products";
let initialState = {
  cartItems: [],
  products:productsList
};

export const ADDCARTITEM = "cart/addItem";
export const REMOVECARTITEM = "cart/removeItem";
export const INCREASECARTQTY = "cart/increseqty";
export const DECREASECARTQTY = "cart/decreaseqty";

const cartReducer = (state = initialState, action) => {
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
      if (found) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartitem) => {
            if (cartitem.ProductID === ProductID) {
              return { ...cartitem, quanty: cartitem.quanty + 1 };
            }
            return cartitem;
          }),
        };
      } else {
        console.log("Item not present in cart");
      }
    }
    case DECREASECARTQTY: {
      const { ProductID } = action.payload;
      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );
      if (found && found.quanty > 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartitem) => {
            if (cartitem.ProductID === ProductID) {
              return { ...cartitem, quanty: cartitem.quanty - 1 };
            }
            return cartitem;
          }),
        };
      } else {
        console.log("TRhere is only one item in cart ");
      }
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
