import { createStore } from "redux";
import {myCreateStore} from './my-redux';
import {products} from './Products'

let initialState = {
  count: 0,
  name: "Satyam Shukla",
  age: 20,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENTBY = "post/incrementby";
const DECREMENTBY = "post/decrementby";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case INCREMENTBY: {
      return { ...state, count: state.count + action.payload };
    }
    case DECREMENTBY: {
      return { ...state, count: state.count - action.payload };
    }
    default:{
        return state;
    }
  }
}

//   if (action.type === INCREMENT) {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === DECREMENT) {
//     return { ...state, count: state.count - 1 };
//   } else if (action.type === INCREMENTBY) {
//     return { ...state, count: state.count + action.payload };
//   } else if (action.type === DECREMENTBY) {
//     return { ...state, count: state.count - action.payload };
//   }
//   return state;
// }

const store = createStore(reducer);
const state = store.getState(); // return state object
console.log(state);
const mystore=myCreateStore();
console.log(mystore)

//run every time when state change
store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch({ type: INCREMENT });

store.dispatch({ type: DECREMENT });

store.dispatch({ type: INCREMENTBY, payload: 10 });

store.dispatch({ type: DECREMENTBY, payload: 2 });

// initialState = reducer(initialState, { type: "post/increment" });
// console.log(initialState)
// initialState = reducer(initialState, { type: "post/increment" });
// console.log(initialState)
// initialState = reducer(initialState, { type: "post/DECREMENT" });
// console.log(initialState)
// initialState = reducer(initialState, { type: "post/INCREMENTBY", payload: 10 });
// console.log(initialState)
// initialState = reducer(initialState, { type: "post/DECREMENTBY", payload: 5 });
// console.log(initialState)
