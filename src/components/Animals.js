// src/components/Animals.js
import React, { useEffect, useState } from "react";
import { getAnimals } from "../api/api";

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getAnimals();
        setAnimals(response.data);
      } catch (err) {
        console.error("Error fetching animals:", err);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <h2>All Animals</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name} - {animal.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;
