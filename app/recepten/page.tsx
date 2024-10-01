"use client";

import { useState } from "react";
import Navbar from "../components/NavBar";
import styles from "../styles/Recepten.module.css";

interface Recept {
  id: number;
  naam: string;
  categorie: string;
  ingredienten: string[];
  instructies: string;
}

const ReceptenLijst: Recept[] = [
  {
    id: 1,
    naam: "Pannenkoeken",
    categorie: "Ontbijt",
    ingredienten: [
      "2 kopjes bloem",
      "2 eieren",
      "1,5 kopjes melk",
      "1 eetlepel suiker",
      "snufje zout",
    ],
    instructies:
      "Meng alle ingrediënten in een kom tot een glad beslag. Verhit een koekenpan en bak de pannenkoeken goudbruin aan beide kanten.",
  },
  {
    id: 2,
    naam: "Caesar Salad",
    categorie: "Lunch",
    ingredienten: [
      "Romaine sla",
      "Caesar dressing",
      "Kipfilet",
      "Parmezaanse kaas",
      "Croutons",
    ],
    instructies:
      "Gril de kipfilet en snijd deze in plakjes. Meng de sla met dressing, kip, kaas en croutons.",
  },
  {
    id: 3,
    naam: "Spaghetti Bolognese",
    categorie: "Diner",
    ingredienten: [
      "500g spaghetti",
      "400g gehakt",
      "1 ui",
      "2 teentjes knoflook",
      "800g tomatenblokjes",
    ],
    instructies:
      "Kook de spaghetti. Fruit de ui en knoflook, voeg het gehakt toe en bak het rul. Voeg de tomaten toe en laat het sudderen. Serveer de saus over de spaghetti.",
  },
  {
    id: 4,
    naam: "Chocolademousse",
    categorie: "Dessert",
    ingredienten: [
      "200g pure chocolade",
      "3 eieren",
      "50g suiker",
      "250ml slagroom",
    ],
    instructies:
      "Smelt de chocolade au bain-marie. Klop de eieren met suiker en slagroom op. Meng alles voorzichtig door elkaar en laat het opstijven in de koelkast.",
  },
];

export default function Recepten() {
  const [recepten, setRecepten] = useState<Recept[]>(ReceptenLijst);
  const [newRecept, setNewRecept] = useState<Recept>({
    id: recepten.length + 1,
    naam: "",
    categorie: "",
    ingredienten: [],
    instructies: "",
  });
  const [newIngredient, setNewIngredient] = useState<string>("");

  const handleAddRecept = () => {
    if (newRecept.naam && newRecept.categorie && newRecept.ingredienten.length > 0 && newRecept.instructies) {
      setRecepten([...recepten, newRecept]);
      setNewRecept({
        id: recepten.length + 1,
        naam: "",
        categorie: "",
        ingredienten: [],
        instructies: "",
      });
      setNewIngredient("");
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient) {
      setNewRecept({
        ...newRecept,
        ingredienten: [...newRecept.ingredienten, newIngredient],
      });
      setNewIngredient("");
    }
  };

  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Opgeslagen Recepten</h1>
        <div className={styles.grid}>
          {recepten.map((recept) => (
            <div key={recept.id} className={styles.card}>
              <h2>{recept.naam}</h2>
              <p>
                <strong>Categorie:</strong> {recept.categorie}
              </p>
              <h3>Ingrediënten</h3>
              <ul>
                {recept.ingredienten.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Bereidingsinstructies</h3>
              <p>{recept.instructies}</p>
            </div>
          ))}
        </div>

        <h2 className={styles.title}>Nieuw Recept Toevoegen</h2>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Naam van het recept"
            value={newRecept.naam}
            onChange={(e) => setNewRecept({ ...newRecept, naam: e.target.value })}
          />
          <input
            type="text"
            placeholder="Categorie (Ontbijt, Lunch, etc.)"
            value={newRecept.categorie}
            onChange={(e) => setNewRecept({ ...newRecept, categorie: e.target.value })}
          />
          <input
            type="text"
            placeholder="Ingrediënt toevoegen"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button onClick={handleAddIngredient}>Ingrediënt Toevoegen</button>
          <ul>
            {newRecept.ingredienten.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <textarea
            placeholder="Bereidingsinstructies"
            value={newRecept.instructies}
            onChange={(e) => setNewRecept({ ...newRecept, instructies: e.target.value })}
          />
          <button onClick={handleAddRecept}>Recept Toevoegen</button>
        </div>
        
      </main>
    </div>
  );
}
