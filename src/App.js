import "./index.css";
import Header from "./components/Header";
import BreedSelectionBar from "./components/BreedSelectionBar";
import DogImages from "./components/DogImages";
import { useState, useEffect } from "react";

function App() {
  const [breed, setBreed] = useState("");
  const [number_of_images, setNum] = useState(1);
  const [images, setImages] = useState([]);

  const handleBreedChange = (selected_breed) => {
    setBreed(selected_breed);
  };

  const handleNumOfImagesChange = (number_of_images) => {
    setNum(number_of_images);
  };

  const fetchImages = async () => {
    if (breed) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${number_of_images}`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
  };

  return (
    <div className="container">
      <Header />
      <BreedSelectionBar
        onBreedChange={handleBreedChange}
        onNumOfImagesChange={handleNumOfImagesChange}
        onFetchImages={fetchImages}
      />
      <DogImages images={images} />
    </div>
  );
}

export default App;
