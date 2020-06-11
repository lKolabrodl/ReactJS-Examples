import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  GridTile,
  GridList,
  IconButton,
  FlatButton,
  Dialog,
} from "material-ui";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";

function ImgResults({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const actions = [
    <FlatButton label="Close" primary={true} onClick={handleClose} />,
  ];

  return (
    <>
      <GridList cols={4}>
        {images.map((img) => (
          <GridTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>{" "}
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt={img.tags} />
          </GridTile>
        ))}
      </GridList>
      <Dialog
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
      >
        <img src={currentImg} alt="open img" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
}

ImgResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImgResults;
