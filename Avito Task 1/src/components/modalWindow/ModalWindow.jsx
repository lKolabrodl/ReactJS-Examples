import React, { useState, useEffect } from "react";
import api from "../../services/api";
import dateFormat from "../../utils/utils";

import "./modalWindow.scss";

import Spinner from "../spinner/Spinnner";
import Form from "./Form/Form";

const ModalWindow = ({ onClose, modalId }) => {
  const [photo, setPhoto] = useState(null);
  const [imageStatus, seImageStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const images = await api.getPhotosComments(modalId);
      setPhoto(images);
    })();
  }, [modalId]);

  const handleImageLoaded = () => {
    seImageStatus(!imageStatus);
  };

  console.log(photo);

  return (
    <div className="modal-window">
      <div className="modal-content">
        <div className="modal-image">
          {imageStatus ? null : <Spinner />}
          {photo && <img onLoad={handleImageLoaded} src={photo.url} alt="" />}
        </div>
        {photo && <Form id={photo.id} />}

        <div className="modal-comments">
          {photo && photo.comments.length !== 0
            ? photo.comments.map((item, i) => (
                <div key={i}>
                  <p>{item.text}</p> <small>{dateFormat(item.date)}</small>
                </div>
              ))
            : "Комментариев нет"}
        </div>
        <div
          onClick={() => {
            onClose();
          }}
          className="close-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" />
            <path d="M32.283 16.302l1.414 1.415-15.98 15.98-1.414-1.414z" />
            <path d="M17.717 16.302l15.98 15.98-1.414 1.415-15.98-15.98z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
