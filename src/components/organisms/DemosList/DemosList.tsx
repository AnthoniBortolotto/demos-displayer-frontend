import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemoCard from "../../molecules/DemoCard/DemoCard";
import { useAppDispatch } from "../../../helpers/utils/hooks";
import { setSelectedDemo } from "../../../redux/slices/selectedDemoSlice";

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
                dispatch(setSelectedDemo(demo));
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default DemosList;
