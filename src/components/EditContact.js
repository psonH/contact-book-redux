import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../actions";
// import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  //   const initialState = useSelector(
  //     (state) => state.addContactReducer.contacts
  //   ).filter((contact) => contact.id.toString() === id);
  const dispatch = useDispatch();
  dispatch(getContact(id));
  const initialState = useSelector((state) => state.contacts.contact[0]);

  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateContact(formData));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow w-75 mx-auto">
      <div className="card-header bg-danger text-white">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning w-25" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
