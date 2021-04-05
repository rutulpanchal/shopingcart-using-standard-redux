import {  ADD_ITEM, INCREASE_AMOUNT , DECREASE_AMOUNT, REMOVE_ITEM } from "../constants/action-types";

//create action type with payload and export it
export function addItem(payload){
  return { type: ADD_ITEM, payload};
}

export function increseAmount(payload){
  return { type: INCREASE_AMOUNT, payload}
}
export function decreseAmount(payload){
  return { type: DECREASE_AMOUNT, payload}
}
export function removeItem(payload){
  return { type: REMOVE_ITEM, payload}
}