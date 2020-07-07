import React, { useState, useEffect } from "react";

const CotactForm = ({ addOrEdit, currentID, information }) => {
  const initialState = {
    fullname: "",
    phone: "",
    email: "",
    adess: "",
  };

  const [contact, setContact] = useState(initialState);

  const handleInputValue = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(contact);
    setContact(initialState);
  };

  //edit

  useEffect(() => {
    if (currentID === "") {
      return;
    }

    setContact({ ...information[currentID] });
  }, [currentID, information]);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full name"
          type="text"
          name="fullname"
          value={contact.fullname}
          onChange={handleInputValue}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="E-mail"
            type="text"
            name="email"
            value={contact.email}
            onChange={handleInputValue}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-phone"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Phone"
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleInputValue}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="adess"
          type="text"
          name="adess"
          value={contact.adess}
          onChange={handleInputValue}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value={currentID == "" ? "Сохранить" : "Обвновить"}
        />
      </div>
    </form>
  );
};

export default CotactForm;
