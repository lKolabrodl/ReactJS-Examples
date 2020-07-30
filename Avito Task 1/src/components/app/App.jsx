import React, { useState, useEffect } from "react";
import PhotoList from "../photoList/PhotoList";
import api from "../../services/api";
import ModalWindow from "../modalWindow/ModalWindow";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [modalId, setModalId] = useState(null);

  //вся загрузка
  useEffect(() => {
    if (photos.length > 0) {
      return;
    }
    (async () => {
      const images = await api.getPhotos();
      setPhotos(images);
    })();
  }, [photos]);

  //получаем id
  function handlePhoto(id) {
    setModalId(id);
  }

  return (
    <div className="photo__search">
      <h1>Фотоальбом</h1>
      <PhotoList handlePhoto={handlePhoto} photos={photos} />

      {modalId && (
        <ModalWindow
          onClose={() => {
            setModalId(null);
          }}
          modalId={modalId}
        />
      )}
    </div>
  );
};

export default App;
