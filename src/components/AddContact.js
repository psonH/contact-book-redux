import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../actions";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const initialState = {
    id: null,
    name: "",
    email: "",
    phone: "",
  };
  const dispatch = useDispatch();
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
    // alert(`Name: ${formData.name} | Email: ${formData.email}`);
    const newContact = {
      ...formData,
      id: shortid.generate(),
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow w-75 mx-auto">
      <div className="card-header bg-danger text-white">Add a Contact</div>
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
          <button className="btn btn-primary w-25" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
