import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DEL_CONTACT,
  CLEAR_LIST,
} from "../constants";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const removeContact = (id) => ({
  type: DEL_CONTACT,
  payload: id,
});

export const clearList = () => ({
  type: CLEAR_LIST,
});
