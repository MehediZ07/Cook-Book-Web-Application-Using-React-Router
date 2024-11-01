import { useLoaderData } from "react-router-dom";
import AreaFoods from "./AreaFoods/AreaFoods";
export default function Area() {
  const data = useLoaderData();
  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto py-24">
      <h1 className="mb-6 text-2xl font-bold mx-auto text-center bg-[#FFC107] rounded-lg p-4">
        Food Categories By Area
      </h1>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8 ">
        {data.meals.map((area, id) => (
          <AreaFoods key={id} area={area}></AreaFoods>
        ))}
      </div>
    </div>
  );
}
