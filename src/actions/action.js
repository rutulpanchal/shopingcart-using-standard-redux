import {  ADD_ITEM, INCRESE_AMOUNT , DECRESE_AMOUNT, REMOVE_ITEM } from "../constants/action-types";


export function addItem(payload){
  return { type: ADD_ITEM, payload};
}

export function increseAmount(payload){
  return { type: INCRESE_AMOUNT, payload}
}
export function decreseAmount(payload){
  return { type: DECRESE_AMOUNT, payload}
}
export function removeItem(payload){
  return { type: REMOVE_ITEM, payload}
}