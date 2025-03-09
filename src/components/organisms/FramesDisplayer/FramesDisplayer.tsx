import { useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { useAppSelector } from "../../../helpers/utils/hooks";
import FrameCard from "../../molecules/FrameCard/FrameCard";
import FrameControlMenu from "../../molecules/FrameControlMenu/FrameControlMenu";
import Loader from "../../atoms/Loader/Loader";

interface FramesListProps {
  framesList: FrameType[];
  setFramesList: React.Dispatch<React.SetStateAction<FrameType[] | null>>;
}

function FramesDisplayer({ framesList, setFramesList }: FramesListProps) {
  const { frame: selectedFrame } = useAppSelector(
    (state) => state.selectedFrame
  );
  const [frameIsLoading, setframeIsLoading] = useState(false);

  if (!selectedFrame) {
    return (
      <section className="w-full h-full justify-center items-center">
        <Loader />
      </section>
    );
  }

  return (
    <section className="w-full h-full p-8 box-border">
      <h1 className="text-2xl font-bold mb-4">
        Navegue pelos frames da demo escolhida
      </h1>

      <div className="relative w-full min-h-full pb-8 box-border">
        <FrameControlMenu
          setFramesList={setFramesList}
          framesList={framesList}
        />
        {frameIsLoading ? (
          <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full flex align-middle justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <FrameCard
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
