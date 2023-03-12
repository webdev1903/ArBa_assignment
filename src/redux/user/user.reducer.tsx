import { ADDTOCART, ALTERQUANTITY, HOMETNC, LOGIN, LOGOUT } from "./user.types";

const initState = {
  user: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksuv9l4is3R4eG-GlG2e4F0oOwxG3nGLtKZwrQv5WSJa9D1DVzi7Kd_MuK4KJTjycpRI&usqp=CAU",
    username: "",
    password: "",
    email: "elonmusk@starlink.com",
    token: "",
  },
  authenticated: false,
  homeTnC: false,
  profileTnC: false,
  cart: [],
};

interface Rating {
  rate: number;
  count: number;
}

export interface Item {
  id: number;
  title: string;
  price: Number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
}

interface User {
  username: string;
  password: string;
  image: string;
  email: string;
  token: string;
}

export interface State {
  user: User;
  authenticated: boolean;
  homeTnC: boolean;
  profileTnC: boolean;
  cart: Item[];
}

interface Payload {
  [key: string]: any;
}

interface actionProps {
  type: string;
  payload: Payload;
}

export const userReducer = (
  state: State = initState,
  { type, payload }: actionProps
) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        authenticated: true,
        user: {
          ...state.user,
          username: payload.username,
          password: payload.password,
          token: payload.token,
        },
      };
    }
    case LOGOUT: {
      return initState;
    }
    case HOMETNC: {
      return { ...state, homeTnC: payload.flag };
    }
    case ADDTOCART: {
      return { ...state, cart: [...state.cart, payload.item] };
    }
    case ALTERQUANTITY: {
      const temp = state.cart.filter((e) => {
        if (e.id === payload.id) {
          e.quantity += payload.q;
          return e;
        } else {
          return e;
        }
      });
      return { ...state, cart: temp };
    }
    default:
      return state;
  }
};
