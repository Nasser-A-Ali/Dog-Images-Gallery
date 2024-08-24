import { useEffect, useState } from "react";
import "../index.css";

const BreedSelectionBar = ({
  onBreedChange,
  onNumOfImagesChange,
  onFetchImages,
}) => {
  const [breeds, setBreeds] = useState([]);
  const [selected_breed, setSelectedBreed] = useState("");
  const [number_of_images, setImageCount] = useState(1);

  useEffect(() => {
    const getBreeds = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      const breed_list = Object.keys(data.message);
      setBreeds(breed_list);
    };

    getBreeds();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    onFetchImages();
  };

  return (
    <>
      <form className="breed-selection-form" onSubmit={onSubmit}>
        <label htmlFor="breed-type">Select Breed: </label>
        <select
          value={selected_breed}
          onChange={(e) => {
            setSelectedBreed(e.target.value);
            onBreedChange(e.target.value);
          }}
        >
          <option value="">Select a breed</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <label htmlFor="number-of-images">Number of images (1-100): </label>

        <input
          type="number"
          id="number-of-images"
          name="number-of-images"
          min="1"
          max="100"
          value={number_of_images}
          onChange={(e) => {
            onNumOfImagesChange(e.target.value);
            setImageCount(e.target.value);
          }}
        />
        <button type="submit" className="button">
          Fetch Images
        </button>
      </form>
    </>
  );
};

export default BreedSelectionBar;
