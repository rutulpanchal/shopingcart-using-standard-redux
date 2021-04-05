import {
  ADD_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_ITEM,
} from "../constants/action-types";
//define initial state
const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: "https://picsum.photos/200",
      stock: 0,
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: "https://picsum.photos/200",
      stock: 0,
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: "https://picsum.photos/200",
      stock: 0,
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: "https://picsum.photos/200",
      stock: 0,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: "https://picsum.photos/200",
      stock: 0,
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: "https://picsum.photos/200",
      stock: 0,
    },
  ],
  addedItems: [],
  total: 0,
};

//create reducer
function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: //add item in addcart array , increse stock in items array by 1, increse total by adding price of item
      let tempItems = state.items.map((items) => {
        if (items.id === action.payload && items.stock === 0) {
          items = { ...items, stock: items.stock + 1 };
          state.total += items.price; //add price of item in to total price
          state.addedItems = [...state.addedItems, items]; //add item in to addedItem array
        }
        return items;
      });

      state.items.forEach((items) => {
        if (items.id === action.payload && items.stock !== 0) {
          items.stock += 1;
          state.total += items.price;
        }
      });

      return { ...state, items: tempItems };

      break;

    case INCREASE_AMOUNT: //increse amount of item in addcart array and increse total by adding price
      let tempAddedItems = state.addedItems.map((items) => {
        if (items.id === action.payload) {
          items = { ...items, stock: items.stock + 1 };
          state.total += items.price;
        }
        return items;
      });

      return { ...state, addedItems: tempAddedItems };

      break;

    case DECREASE_AMOUNT: //decrese ammount of item in addcart array and decrese total by decresing price of item
      let decreasedItems = state.addedItems.map((items) => {
        if (items.id === action.payload) {
          items = { ...items, stock: items.stock - 1 };
          state.total -= items.price;
        }
        return items;
      });

      return { ...state, addedItems: decreasedItems };

      break;
    case REMOVE_ITEM: //remove item from addcart array by filtering clicked item id
      state.addedItems.forEach((items) => {
        if (items.id === action.payload) {
          state.total -= items.price * items.stock;
        }
      });

      state.items.forEach((items) => {
        if (items.id === action.payload) {
          items.stock = 0;
        }
      });

      const filteredItems = state.addedItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, addedItems: filteredItems };
      break;
    default:
      return state;
      break;
  }

  return state;
}

export default Reducer;
