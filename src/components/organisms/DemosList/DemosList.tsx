import { GetDemosListResponseType } from "../../../services/responseTypes/GetDemosListResponseType";
import DemoCard from "../../molecules/DemoCard/DemoCard";

interface DemosListProps {
  demos: GetDemosListResponseType;
}

function DemosList({ demos }: DemosListProps) {
  return (
    <section>
      <h1>Lista de Demos</h1>
      <div>
        {demos.map((demo) => (
          <DemoCard
            key={demo.id}
            title={demo.name}
            buttonText="Visualizar"
            onClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
}

export default DemosList;
