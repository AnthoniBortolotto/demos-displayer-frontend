import { FrameType } from "../../../helpers/types/frames";
import ControlMenuItem from "../../atoms/ControlMenuItem/ControlMenuItem";

interface FrameControlMenuProps {
  framesList: FrameType[];
}

function FrameControlMenu({ framesList }: FrameControlMenuProps) {
  return (
    <div className="flex items-center justify-between absolute top-20 left-12 right-12">
      <ControlMenuItem
        img="/frames/arrow-right.svg"
        alt="previous"
        onClick={() => {}}
        imgClass="transform rotate-180"
      />
      <ControlMenuItem
        img="/frames/arrow-right.svg"
        alt="previous"
        onClick={() => {}}
      />
    </div>
  );
}

export default FrameControlMenu;
