import { useEffect, useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { api } from "../../../services/api";

interface FramesListProps {
  demoId: string;
}

function FramesList({ demoId }: FramesListProps) {
  const [FramesList, setFramesList] = useState<FrameType[] | null>(null);
  useEffect(() => {
    api.getFramesByDemoId(demoId).then((response) => {
      setFramesList(response.data);
    });
  }, [demoId]);

  if (!FramesList) {
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
      {FramesList.map((frame) => (
        <div key={frame.id}>
          <p>{frame.id}</p>
        </div>
      ))}
    </main>
  );
}

export default FramesList;
