"use client";

import { useState } from "react";

export default function GlobalPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = () => {
    if (password === "admin123") {
      setAuthorized(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  if (!authorized) {
    return (
      <main style={styles.container}>
        <h2>Mot de passe GLOBAL</h2>
        <input
          type="password"
          placeholder="Entrez le mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Valider
        </button>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1>Bienvenue dans GLOBAL</h1>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial"
  },
  input: {
    padding: "10px",
    width: "250px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2d6a4f",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};