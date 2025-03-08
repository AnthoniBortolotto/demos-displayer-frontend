import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./HomePage.css";
import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemosList from "../../organisms/DemosList/DemosList";
import { useAppSelector } from "../../../helpers/utils/hooks";
import FramesDisplayer from "../../organisms/FramesDisplayer/FramesDisplayer";

export default function HomePage() {
  const [demos, setDemos] = useState<GetDemosListResponseType | null>(null);
  const selectedDemo = useAppSelector((state) => state.selectedDemo.demo);
  const selectedFrame = useAppSelector((state) => state.selectedFrame.frame);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getDemosList();
      setDemos(response.data);
    };

    fetchData();
  }, []);

  if (selectedDemo) {
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
        <FramesDisplayer demoId={selectedDemo.id} />
      </main>
    );
  }

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
