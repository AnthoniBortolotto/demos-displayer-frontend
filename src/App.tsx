import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [demos, setDemos] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/demos", {
        method: "GET",
      });
      setDemos(await response.json());
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {demos &&
        demos.map((demo: any) => (
          <div key={demo.id} className="card">
            <h2 className="font-bold underline">{demo.name}</h2>
            <button className="font-bold underline"
            >Visualizar</button>
          </div>
        ))}
    </div>
  );
}

export default App;
