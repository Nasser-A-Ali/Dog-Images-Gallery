import { useState, useEffect } from "react";
import "../index.css";

const DogImages = (images) => {
  // console.log("Yo" + JSON.stringify(images.images));
  // console.log(images.images.length);
  // console.log(typeof images);
  return (
    <>
      <div className="images-container">
        {images.images == undefined || images.images.length === 0 ? (
          <p>No images to display</p>
        ) : (
          images.images.map((image, index) => (
            <img className="single-image" key={index} src={image} />
          ))
        )}
      </div>
    </>
  );
};

export default DogImages;
