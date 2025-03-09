import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import {
  setFrameEdditedHtml,
  setFrameMode,
} from "../../../redux/slices/selectedFrameSlice";
import { addMessageOnIFrame } from "../../../helpers/utils/frames/addMessageOnIFrame";

interface FrameCardProps {
  html: string;
  frameIsLoading: boolean;
  setFrameIsLoading: (value: boolean) => void;
}

function FrameCard({
  html,
  frameIsLoading = true,
  setFrameIsLoading,
}: FrameCardProps) {
  const [finalFrameHtml, setFinalFrameHtml] = useState("");
  const selectedFrame = useAppSelector((state) => state.selectedFrame);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFrameIsLoading(true);
    window.addEventListener("message", function (e) {
      if (e.data === "triggered Double Click") dispatch(setFrameMode("edit"));
    });

    const frameHtmlWithDoubleClickEvent = addMessageOnIFrame(html, "dblclick");

    setFinalFrameHtml(frameHtmlWithDoubleClickEvent);
    setFrameIsLoading(false);
    return () => {
      window.removeEventListener("message", function (e) {
        if (e.data === "triggered Double Click") dispatch(setFrameMode("edit"));
      });
    };
  }, [html]);

  if (selectedFrame.mode === "view")
    return (
      <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full flex align-middle justify-center items-center">
        <iframe srcDoc={finalFrameHtml} title="frame" />
      </div>
    );

  // input to edit the frame html
  return (
    <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full flex align-middle justify-center items-center">
      <textarea
        className="w-full h-full p-4"
        value={selectedFrame.FrameEdittedHtml || ""}
        onChange={(e) => dispatch(setFrameEdditedHtml(e.target.value))}
      />
    </div>
  );
}

export default FrameCard;
