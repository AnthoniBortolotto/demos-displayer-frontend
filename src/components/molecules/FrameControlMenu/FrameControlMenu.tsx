import { FrameType } from "../../../helpers/types/frames";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import ControlMenuItem from "../../atoms/ControlMenuItem/ControlMenuItem";

interface FrameControlMenuProps {
  framesList: FrameType[];
}

function FrameControlMenu({ framesList }: FrameControlMenuProps) {
  const dispatch = useAppDispatch();
  const selectedFrame = useAppSelector((state) => state.selectedFrame);
  return (
    <div className="flex items-center justify-between top-20 left-12 right-12 mb-2">
      <div className="flex items-center space-x-4">
        <ControlMenuItem
          img="/frames/arrow-right.svg"
          alt="anterior"
          onClick={() => {}}
          imgClass="transform rotate-180"
        />
      </div>
      <div className="flex items-center space-x-4">
        {selectedFrame.mode === 'edit' && (
          <ControlMenuItem
            img="/frames/save.svg"
            alt="salvar"
            onClick={() => {
              // save frame
            }}
          />
        )}
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
