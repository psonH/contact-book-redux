import {
  CREATE_CONTACT,
  GET_CONTACT,
  DEL_CONTACT,
  UPDATE_CONTACT,
  CLEAR_LIST,
} from "../constants";
const initialState = require("../data.json");

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: state.contacts.filter(
          (contact) => contact.id.toString() === action.payload
        ),
      };
    case DEL_CONTACT:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        ),
      };
    case CLEAR_LIST:
      return {
        contacts: [],
      };
    default:
      return state;
  }
};
