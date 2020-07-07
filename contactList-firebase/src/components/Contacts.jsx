import React, { useState, useEffect } from "react";
import ContactForm from "./CotactForm";

import firebase from "../firebase";

const Contacts = () => {
  const [information, setInformation] = useState({});
  const [currentID, setcurrentID] = useState("");

  console.log(information);

  useEffect(() => {
    firebase.child("contacts").on("value", (item) => {
      if (item.val() !== null) {
        setInformation({
          ...item.val(),
        });
      } else {
        setInformation({});
      }
    });
  }, []);

  const addOrEdit = (items) => {
    if (currentID === "") {
      firebase.child("contacts").push(items, (err) => {
        if (err) {
          console.log("Ошибка firebase ", err);
        } else {
          setcurrentID("");
        }
      });
    } else {
      firebase.child(`contacts/${currentID}`).set(items, (err) => {
        if (err) {
          console.log("Ошибка firebase ", err);
        } else {
          setcurrentID("");
        }
      });
    }
  };

  const onDelete = (item) => {
    if (window.confirm("Вы уверены?")) {
      firebase.child(`contacts/${item}`).remove((err) => {
        if (err) {
          console.log("Ошибка firebase ", err);
        } else {
          setcurrentID("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbothon jumbothon-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            addOrEdit={addOrEdit}
            currentID={currentID}
            information={information}
          />
        </div>
        <div className="col-md-7">
          <table className=" table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(information).map((item, i) => (
                <tr key={i}>
                  <td>{information[item].fullname}</td>
                  <td>{information[item].phone}</td>
                  <td>{information[item].email}</td>
                  <td>
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setcurrentID(item);
                      }}
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => onDelete(item)}
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
