import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./HomePage.css";
import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemosList from "../../organisms/DemosList/DemosList";
import { useAppSelector } from "../../../helpers/utils/hooks";
import FramesDisplayer from "../../organisms/FramesDisplayer/FramesDisplayer";
import Loader from "../../atoms/Loader/Loader";

export default function HomePage() {
  const [demos, setDemos] = useState<GetDemosListResponseType | null>(null);
  const selectedDemo = useAppSelector((state) => state.selectedDemo.demo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getDemosList();
      setDemos(response.data);
    };

    fetchData();
  }, []);

  if (selectedDemo) {
    return (
      <main className="w-full h-full justify-center items-center">
        <FramesDisplayer demoId={selectedDemo.id} />
      </main>
    );
  }

  if (!demos) {
    return (
      <main className="w-full h-full justify-center items-center">
        <Loader />
      </main>
    );
  }

  return (
    <main className="w-full h-full p-8 box-border">
      <DemosList demos={demos} />
    </main>
  );
}
