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
      
      return ( 
         state.items.map((items) =>
          items.id === action.payload
            ? items.stock === 0
              ? { ...state, addedItems: state.addedItems.push(items) }
              : "Item Added"
            : "out of stock"
        ),
        state.addedItems.map((items) =>
          items.id === action.payload
            ? ([...state.addedItems,
                (items = { ...items, stock: (items.stock += 1) }),
              ],
              { ...state, total: (state.total += items.price) })
            : "No Item Added"
        ),
        
        { ...state, items: state.items, addedItems: state.addedItems }
      );
      break;

    case INCREASE_AMOUNT: //increse amount of item in addcart array and increse total by adding price
      
      return (state.addedItems.map((items) =>
        items.id === action.payload
          ? ({
              ...state.addedItems,
              items: { ...items, stock: (items.stock += 1) },
            },
            { ...state, total: (state.total += items.price) })
          : "Item Not Increased"
      ),
      
       { ...state, addedItems: state.addedItems }
       )
      break;

    case DECREASE_AMOUNT: //decrese ammount of item in addcart array and decrese total by decresing price of item
      
    return (  
    state.addedItems.map((items) =>
        items.id === action.payload
          ? ({
              ...state.addedItems,
              items: { ...items, stock: (items.stock -= 1) },
            },
            { ...state, total: (state.total -= items.price) })
          : "Item amount remain same"
      ),
      
       { ...state, addedItems: state.addedItems }
       )
      break;
    case REMOVE_ITEM: //remove item from addcart array by filtering clicked item id
      
      state.addedItems.forEach((items) =>
        items.id === action.payload
          ? ({ ...state, total: (state.total -= items.price * items.stock) },
            {
              ...state.addedItems,
              items: { ...items, stock: (items.stock = 0) },
            })
          : "No Item Removed"
      );
      state.items.forEach((items) =>
        items.id === action.payload
          ? { ...state, items: { ...items, stock: 0 } }
          : "out of stoock"
      );
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
