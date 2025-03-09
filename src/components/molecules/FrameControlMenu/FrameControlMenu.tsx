import { useState } from "react";
import { FrameType } from "../../../helpers/types/frames";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import { setSelectedFrame } from "../../../redux/slices/selectedFrameSlice";
import { api } from "../../../services/api";
import ControlMenuItem from "../../atoms/ControlMenuItem/ControlMenuItem";

interface FrameControlMenuProps {
  framesList: FrameType[];
  setFramesList: React.Dispatch<React.SetStateAction<FrameType[] | null>>;
}

function FrameControlMenu({
  framesList,
  setFramesList,
}: FrameControlMenuProps) {
  const [loadingSaveButton, setLoadingSaveButton] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedFrame = useAppSelector((state) => state.selectedFrame);
  const position = selectedFrame.frame?.order || 0;

  return (
    <div className="flex items-center justify-between top-20 left-12 right-12 pb-8">
      <div className="flex items-center space-x-4">
        <ControlMenuItem
          img="/frames/arrow-right.svg"
          alt="anterior"
          onClick={() => {
            const previousFrame = framesList[position - 1];
            dispatch(setSelectedFrame(previousFrame));
          }}
          imgClass="transform rotate-180"
          disabled={position === 0}
        />
      </div>
      <div className="flex items-center space-x-4">
        {selectedFrame.mode === "edit" && (
          <ControlMenuItem
            img="/frames/save.svg"
            alt="salvar"
            onClick={() => {
              setLoadingSaveButton(true);

              api
                .putFrame(
                  selectedFrame.frame!.id,
                  selectedFrame.FrameEdittedHtml!
                )
                .then(async () => {
                  const newFrame: FrameType = {
                    ...selectedFrame.frame!,
                    html: selectedFrame.FrameEdittedHtml!,
                  };
                  const newFramesList = await api.getFramesByDemoId(
                    newFrame.demoId
                  );
                  setFramesList(
                    newFramesList.data.sort((a, b) => a.order - b.order)
                  );
                  dispatch(setSelectedFrame(newFrame));
                })
                .catch((error) => {
                  console.log("ocorreu um erro ao atualizar o frame", error);
                })
                .finally(() => {
                  setLoadingSaveButton(false);
                });
            }}
            loading={loadingSaveButton}
          />
        )}
        <ControlMenuItem
          img="/frames/arrow-right.svg"
          alt="próximo"
          onClick={() => {
            const nextFrame = framesList[position + 1];
            dispatch(setSelectedFrame(nextFrame));
          }}
          disabled={position === framesList.length - 1}
        />
      </div>
    </div>
  );
}

export default FrameControlMenu;
