import { useState } from "react";
import "./App.css";
import FlashButton from "./button.jsx";
import Timer from "./Timer.jsx";

const items = [
  "Belajar GIT & CLI",
  "Belajar HTML & CSS",
  "Belajar Javascript",
  "Belajar ReactJS Dasar",
  "Belajar ReactJS Advance",
];

export default function App() {
  const [checked, setChecked] = useState(() => new Set());

  const toggle = (label) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });

  return (
    <Timer> <main className="card" role="form" aria-labelledby="title">
    <div className="brand">
      {/* file di folder public, akses langsung via /logo.png */}
      <img src="/logo.png" alt="sanbercode" />
    </div>

<h1>THINGS TO DO</h1>
<p className="subtitle">During bootcamp in sanbercode</p>
<div className="divider" />

<ul className="list">
      {items.map((label, i) => (
        <li key={i} className="item">
          <input
            id={`c${i}`}
            type="checkbox"
            checked={checked.has(label)}
            onChange={() => toggle(label)}
          />
          <label htmlFor={`c${i}`}>{label}</label>
        </li>
      ))}
    </ul>

<FlashButton onClick={() => console.log("Data:", [...checked])}>
SEND
</FlashButton>
  </main>
</Timer>
   
  );
}

 

