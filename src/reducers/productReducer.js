import { ADD_ITEM, INCRESE_AMOUNT , DECRESE_AMOUNT, REMOVE_ITEM } from "../constants/action-types";

const initialState = {items: [
  {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:'https://picsum.photos/200', stock:0},
  {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: 'https://picsum.photos/200',stock:0},
  {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: 'https://picsum.photos/200',stock:0},
  {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:'https://picsum.photos/200',stock:0},
  {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: 'https://picsum.photos/200',stock:0},
  {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: 'https://picsum.photos/200',stock:0}
],
addedItems:[],
total: 0
} 
  
  function Reducer(state = initialState, action) {
    switch(action.type){
        case ADD_ITEM:
              console.log('Item added')
              state.items.map(items =>  items.id===action.payload ? (items.stock===0 ? ( { ...state, addedItems:state.addedItems.push(items)} ) : console.log('added')) : console.log('out of stoock',items.name))
              state.addedItems.map(items => items.id===action.payload ? ([...state.addedItems, items={...items, stock:items.stock+=1}], {...state, total:state.total+=(items.price)}): console.log('hi') )
              console.log('added item', state.addedItems)
              return {...state, items:state.items , addedItems:state.addedItems} 
              break;
        case INCRESE_AMOUNT:
              console.log('Item Incresed')
              state.addedItems.map(items => items.id===action.payload ? ({...state.addedItems, items:{...items, stock:items.stock+=1}}, {...state, total:state.total+=(items.price)}): console.log('hi') )
              console.log('added item', state.addedItems)
              return {...state, addedItems:state.addedItems}
              break;
        case DECRESE_AMOUNT:
              console.log('Item decresed')
              state.addedItems.map(items => items.id===action.payload ? ({...state.addedItems, items:{...items, stock:items.stock-=1}}, {...state, total:state.total-=(items.price)}): console.log('hi') )
              console.log('added item', state.addedItems)
              return {...state, addedItems:state.addedItems}
              break;
        case REMOVE_ITEM:
              console.log('Item removed')
              state.addedItems.map(items => items.id===action.payload ? ({...state, total:state.total-=(items.price*items.stock)},{...state.addedItems, items:{...items, stock:items.stock=0}}): console.log('hi') )
              state.items.map(items =>  items.id===action.payload ? {...state, items:{...items , stock:0}} : console.log('out of stoock',items.name))
              const filtereditem = state.addedItems.filter(item => item.id!==action.payload) 
              return {...state, addedItems:filtereditem}
              break;
        default:
            return state;
            break;
    }

    return state
  };
  
  export default Reducer;