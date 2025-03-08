import { useEffect, useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { api } from "../../../services/api";
import { setSelectedFrame } from "../../../redux/slices/selectedFrameSlice";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import FrameCard from "../../molecules/FrameCard/FrameCard";
import FrameControlMenu from "../../molecules/FrameControlMenu/FrameControlMenu";

interface FramesListProps {
  demoId: string;
}

function FramesDisplayer({ demoId }: FramesListProps) {
  const [framesList, setFramesList] = useState<FrameType[] | null>(null);
  const dispatch = useAppDispatch();
  const selectedFrame = useAppSelector((state) => state.selectedFrame.frame);

  useEffect(() => {
    api.getFramesByDemoId(demoId).then((response) => {
      const sortedFrames = response.data.sort((a, b) => a.order - b.order);
      dispatch(setSelectedFrame(sortedFrames[0]));
      setFramesList(sortedFrames);
    });
  }, [demoId]);

  if (!framesList || !selectedFrame) {
    return (
      <section
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          {!framesList
            ? "Carregando..."
            : "Desculpe, esta demo não está disponível no momento"}
        </p>
      </section>
    );
  }

  return (
    <section
    style={{
      width: "100%",
      height: "100%",
      padding: "2rem",
      boxSizing: "border-box",
    }}
    >
      <h1 className="text-2xl font-bold mb-4">
        Navegue pelos frames da demo escolhida
      </h1>
      
      <div className="relative"  style={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}>
        <FrameControlMenu framesList={framesList} />
        <FrameCard html={selectedFrame.html} />
      </div>
    </section>
  );
}

export default FramesDisplayer;
