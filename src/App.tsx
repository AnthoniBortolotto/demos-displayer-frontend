import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";


function App() {
  const [demos, setDemos] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getDemos();
      setDemos(response.data);
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
            <h2 className="">{demo.name}</h2>
            <button className=""
            >Visualizar</button>
          </div>
        ))}
    </div>
  );
}

export default App;
