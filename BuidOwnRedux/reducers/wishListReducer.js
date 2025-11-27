import { productsList } from "../Products";
let initialState = {
  wishList: [],
  products:productsList
}
export const ADDWISHLISTITEM = "wishlist/addItem";
export const REMOVEWISHLISTITEM = "wishlist/removeItem";

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDWISHLISTITEM: {
      const { ProductID } = action.payload;
      const found = state.products.find((product) => product.id === ProductID);
      if (found) {
        return { ...state, wishList: [...state.wishList, action.payload] };
      }
      return state;
    }
    case REMOVEWISHLISTITEM: {
      const { ProductID } = action.payload;
      const found = state.wishList.find(
        (cartitem) => cartitem.ProductID === ProductID
      );
      if (found) {
        const deleted = state.wishList.filter(
          (cartitem) => cartitem.ProductID !== ProductID
        );
        return { ...state, wishList: deleted };
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export default wishListReducer;
