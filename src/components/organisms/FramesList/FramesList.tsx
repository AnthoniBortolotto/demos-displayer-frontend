import { useEffect, useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import { api } from "../../../services/api";
import { setSelectedFrame } from "../../../redux/slices/selectedFrameSlice";
import Loader from "../../atoms/Loader/Loader";
import { addMessageOnIFrame } from "../../../helpers/utils/frames/addMessageOnIFrame";

interface FramesListProps {
  demoId: string;
  framesList: FrameType[] | null;
  setFramesList: React.Dispatch<React.SetStateAction<FrameType[] | null>>;
}

function FramesList({ demoId, framesList, setFramesList }: FramesListProps) {
  const dispatch = useAppDispatch();
  const [frameIsLoading, setframeIsLoading] = useState(true);

  useEffect(() => {
    api.getFramesByDemoId(demoId).then((response) => {
      const sortedFrames = response.data.sort((a, b) => a.order - b.order);
      setFramesList(sortedFrames);
      setframeIsLoading(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("message", function (e) {
      const correctFrame = framesList?.find(
        (frame) => frame.id === String(e.data)
      );
      if (correctFrame) dispatch(setSelectedFrame(correctFrame));
    });

    return () => {
      window.removeEventListener("message", function (e) {
        const correctFrame = framesList?.find(
          (frame) => frame.id === String(e.data)
        );
        if (correctFrame) dispatch(setSelectedFrame(correctFrame));
      });
    };
  }, [framesList]);

  if (!framesList) {
    return (
      <section className="w-full h-full justify-center items-center">
        <div className="w-full h-full flex align-middle justify-center items-center">
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-full p-8 box-border">
      <h1 className="text-2xl font-bold mb-4">
        Navegue pelos frames da demo escolhida
      </h1>

      <div className="relative w-full min-h-full pb-8 box-border">
        {frameIsLoading ? (
          <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full flex align-middle justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {framesList.map((frame) => (
              <div
                onClick={() => dispatch(setSelectedFrame(frame))}
                key={frame.id}
                className="card w-[49%] max-w-full!"
              >
                <iframe
                  srcDoc={addMessageOnIFrame(frame.html, "click", frame.id)}
                  title={`frame-${frame.id}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FramesList;
