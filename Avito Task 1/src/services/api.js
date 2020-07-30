import axios from "axios";

export default {
  getPhotos: async () => {
    const response = await axios.get(
      "https://boiling-refuge-66454.herokuapp.com/images"
    );
    return response.data;
  },

  getPhotosComments: async (PhotoId) => {
    const response = await axios.get(
      `https://boiling-refuge-66454.herokuapp.com/images/${PhotoId}`
    );
    return response.data;
  },

  sendPhotosComment: async (PhotoId, name, comment) => {
    const response = await axios.post(
      `https://boiling-refuge-66454.herokuapp.com/images/${PhotoId}/comments`,
      { name, comment }
    );

    return response;
  },
};
