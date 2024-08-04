import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Formas geométricas</h3>
      <Square />
      <Circle />
    </div>
  );
};
