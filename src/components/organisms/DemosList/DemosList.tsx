import { useDispatch } from "react-redux";
import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemoCard from "../../molecules/DemoCard/DemoCard";
import { AppDispatch } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../helpers/utils/hooks";
import { setFrame } from "../../../redux/slices/selectedFrameSlice";

interface DemosListProps {
  demos: GetDemosListResponseType;
}

function DemosList({ demos }: DemosListProps) {
  const dispatch = useAppDispatch();
//  const result = useAppSelector(state => state.frame.value);
  return (
    <section>
      <h1>Lista de Demos</h1>
      <div>
        {demos.map((demo) => (
          <DemoCard
            key={demo.id}
            title={demo.name}
            buttonText="Visualizar"
            onClick={() => {
              
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default DemosList;
