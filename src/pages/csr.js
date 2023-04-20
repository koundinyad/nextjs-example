import React, { useState, useEffect } from "react";
import styles from "../styles/CSR.module.css";

const CSRPage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();
      setPokemon(data.results);
    };

    fetchPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokemon List</h1>
      <ul className={styles.grid}>
        {pokemon.map((p, index) => (
          <li className={styles.gridItem} key={index}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={p.name}
            />
            <p className={styles.gridItemName}>{p.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CSRPage;
