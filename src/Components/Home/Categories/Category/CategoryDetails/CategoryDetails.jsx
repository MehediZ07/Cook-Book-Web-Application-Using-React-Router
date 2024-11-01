import { useLoaderData, useNavigate } from "react-router-dom";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
export default function CategoryDetails() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleGoCook = () => {
    navigate(`/gooCook/${item.strMeal}`);
  };

  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto py-24">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-8 ">
        {data.meals.map((category, id) => (
          <CategoryOptions key={id} category={category}></CategoryOptions>
        ))}
      </div>
    </div>
  );
}
