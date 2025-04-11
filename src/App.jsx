import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
console.log(results)

  return (
    <>
      <div
        style={{
          color: "#333",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "#4285f4", marginBottom: "20px" }}>
          Google
        </h1>
        <input
          type="text"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            border: "2px solid #ccc",
            borderRadius: "25px",
            outline: "none",
            width: "80%",
            maxWidth: "400px",
            marginBottom: "20px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          placeholder="Enter the search text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{
            padding: "10px 30px",
            fontSize: "18px",
            background: "linear-gradient(to right, #4285f4, #3367d6)",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onClick={() => {
            fetch("/api/search?text=" +text)
              .then((response) => response.json())
              .then((results) => setResults(results))
              .catch((error) => console.error("Failed to search!", error));
          }}
        >
          Search
        </button>
        <ul style={{ fontSize: "20px", fontStyle: "italic", textDecoration: "none", listStyleType: "none" }}>
            {results.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
