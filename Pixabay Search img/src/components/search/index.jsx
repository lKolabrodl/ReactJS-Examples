import React, { useState, useEffect } from "react";
import TextField from "material-ui/TextField";
import axios from "axios";
import ImgResults from "../imgresults";

const Search = () => {
  const API_URL = "https://pixabay.com/api/";
  const API_KEY = "16948746-7556c94ab459ad75df444fbc1";

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(10);
  const [images, setImages] = useState([]);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text == "") {
      return;
    }
    axios
      .get(
        `${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${amount}&safesearch=true`
      )
      .then((res) => setImages(res.data.hits))
      .catch((err) => console.log(err));
  }, [text, amount]);

  return (
    <div>
      <TextField
        floatingLabelText="Search images"
        fullWidth={true}
        value={text}
        onChange={onChangeText}
      />
      <br />
      <select
        style={{ "max-width": 130 }}
        className="form-control form-control-sm"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <br />
      {images.length > 0 ? <ImgResults images={images} /> : null}
    </div>
  );
};

export default Search;
