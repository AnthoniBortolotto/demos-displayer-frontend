import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./HomePage.css";
import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemosList from "../../organisms/DemosList/DemosList";

export default function HomePage() {
  const [demos, setDemos] = useState<GetDemosListResponseType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getDemosList();
      setDemos(response.data);
    };

    fetchData();
  }, []);

  if (!demos) {
    return (
      <main
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Carregando...</p>
      </main>
    );
  }

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <DemosList demos={demos} />
    </main>
  );
}
