import { ActionTypes } from "../constants/action-types";

const intialState = {
  tickets:[],
};

export const ticketReducer = (state = intialState, { type, payload } : any) => {
  switch (type) {
    case ActionTypes.SET_TICKETS:
      return { ...state, tickets: payload };
    default:
      return state;
  }
};

