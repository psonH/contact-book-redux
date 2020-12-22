import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeContact } from "../actions";

const Contact = ({ contactInfo, selectAll }) => {
  const { id, name, email, phone } = contactInfo;
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr key={id}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              checked={selectAll}
              className="custom-control-input"
            />
            <label className="custom-control-label"></label>
          </div>
        </td>
        <td>
          <Avatar className="mr-3" name={name} round size="45" />
          {name}
        </td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="actions">
          <Link to={`/edit/${id}`}>
            <span className="material-icons mr-3 text-warning">edit</span>
          </Link>
          <span
            className="material-icons text-danger delete-contact"
            onClick={() => dispatch(removeContact(id))}
          >
            remove_circle
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default Contact;
