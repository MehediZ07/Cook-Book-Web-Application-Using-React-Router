import { useLoaderData } from "react-router-dom";
import AreaFoodDetails from "./AreaFoodDetails/AreaFoodDetails";

export default function AreaFoodOption() {
  const data = useLoaderData();
  //   const navigate = useNavigate();
  //   const handleGoCook = () => {
  //     navigate(`/gooCook/${data.meals.strMeal}`);
  //   };

  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto py-24">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3  grid-cols-1s  gap-8 ">
        {data.meals.map((item, id) => (
          <AreaFoodDetails key={id} item={item}></AreaFoodDetails>
        ))}
      </div>
    </div>
  );
}
