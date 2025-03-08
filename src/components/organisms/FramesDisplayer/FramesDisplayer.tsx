import { useEffect, useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { api } from "../../../services/api";
import { setSelectedFrame } from "../../../redux/slices/selectedFrameSlice";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import FrameCard from "../../molecules/FrameCard/FrameCard";
import FrameControlMenu from "../../molecules/FrameControlMenu/FrameControlMenu";
import Loader from "../../atoms/Loader/Loader";

interface FramesListProps {
  demoId: string;
}

function FramesDisplayer({ demoId }: FramesListProps) {
  const [framesList, setFramesList] = useState<FrameType[] | null>(null);
  const dispatch = useAppDispatch();
  const { frame: selectedFrame, mode, FrameEdittedHtml} = useAppSelector((state) => state.selectedFrame);
  const [frameIsLoading, setframeIsLoading] = useState(true);

  useEffect(() => {
    api.getFramesByDemoId(demoId).then((response) => {
      const sortedFrames = response.data.sort((a, b) => a.order - b.order);
      dispatch(setSelectedFrame(sortedFrames[0]));
      setFramesList(sortedFrames);
      setframeIsLoading(false);
    });
  }, []);

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

      <div
        className="relative"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "2em",
          paddingBottom: "2em",
          boxSizing: "border-box",
        }}
      >
        <FrameControlMenu framesList={framesList} />
        {frameIsLoading ? (
          <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full flex align-middle justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <FrameCard
              frameIsLoading={frameIsLoading}
              html={selectedFrame.html}
              setFrameIsLoading={setframeIsLoading}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default FramesDisplayer;
