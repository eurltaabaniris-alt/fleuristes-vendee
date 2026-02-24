export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>SÉLECTIONNEZ VOTRE ÉTABLISSEMENT</h1>

      <button style={styles.button}>GLOBAL</button>
      <button style={styles.button}>A FLEURS DE POT</button>
      <button style={styles.button}>COCOTALYS</button>
      <button style={styles.button}>FLORAPHILE</button>
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
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    marginBottom: "40px",
    fontSize: "24px"
  },
  button: {
    width: "280px",
    padding: "15px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2d6a4f",
    color: "white"
  }
};