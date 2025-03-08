import { FrameType } from "../../../helpers/types/frames";
import ControlMenuItem from "../../atoms/ControlMenuItem/ControlMenuItem";

interface FrameControlMenuProps {
  framesList: FrameType[];
}

function FrameControlMenu({ framesList }: FrameControlMenuProps) {
  return (
    <div className="flex items-center justify-between absolute top-20 left-12 right-12">
      <div className="flex items-center space-x-4">
        <ControlMenuItem
          img="/frames/arrow-right.svg"
          alt="anterior"
          onClick={() => {}}
          imgClass="transform rotate-180"
        />
      </div>
      <div className="flex items-center space-x-4">
        <ControlMenuItem
          img="/frames/arrow-right.svg"
          alt="próximo"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default FrameControlMenu;
