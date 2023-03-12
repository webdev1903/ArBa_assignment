import {
  LOGIN,
  LOGOUT,
  HOMETNC,
  ADDTOCART,
  INCREMENT,
  DECREMENT,
  ALTERQUANTITY,
} from "./user.types";
import { Item } from "./user.reducer";

interface User {
  username: string;
  password: string;
  token: string;
}

export const login = (payload: User) => {
  return { type: LOGIN, payload };
};
export const logout = () => {
  return { type: LOGOUT };
};
export const toggleHomeTnc = (flag: boolean) => {
  return { type: HOMETNC, payload: { flag } };
};
export const addToCart = (item: Item) => {
  return { type: ADDTOCART, payload: { item } };
};
export const alterQuantity = (id: number, q: number) => {
  return { type: ALTERQUANTITY, payload: { id, q } };
};
