import React, { useState, useEffect } from "react";

const BreedSelectorAI = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const url = "https://dog.ceo/api/breeds/list/all";

      try {
        const response = await fetch(url);
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
        setLoading(false);
      }
    };

    fetchDogBreeds();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select>
          <option value="">Select a breed</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default BreedSelectorAI;
