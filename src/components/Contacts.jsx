/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../actions";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <div>
      {selectAll && (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(clearList())}
        >
          Delete All
        </button>
      )}
      <table className="table table-hover shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contacts.map((contact) => (
          <Contact
            contactInfo={contact}
            key={contact.id}
            selectAll={selectAll}
          />
        ))}
      </table>
    </div>
  );
};

export default Contacts;
