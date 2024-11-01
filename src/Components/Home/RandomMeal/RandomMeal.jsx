import { useLoaderData, useNavigate } from "react-router-dom";
export default function RandomMeal() {
  const data = useLoaderData();
  const meal = data.meals[0];
  const navigate = useNavigate();
  const handleGoCook = () => {
    navigate(`/gooCook/${meal.strMeal}`);
  };
  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto py-24">
      <h1 className="mb-6 text-2xl font-bold mx-auto text-center w-fit bg-[#ffc10775] rounded-lg p-4">
        {meal.strMeal}
      </h1>
      <div className="lg:flex gap-6 items-center ">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className=" md:w-[400px] lg:w-[500px] h-auto mx-auto rounded-xl mb-6"
        />
        <div className="space-y-6">
          <p className="text-2xl">
            <strong>Category:</strong> {meal.strCategory}
          </p>
          <p className="text-xl">
            <strong>Area:</strong> {meal.strArea}
          </p>
          <p className="">
            <strong>Instructions:</strong> {meal.strInstructions}
          </p>

          <button
            className="btn bg-[#FFC107] text-xl font-bold text-gray-700 mt-6"
            onClick={handleGoCook}
          >
            Start Cooking
          </button>
        </div>
      </div>
    </div>
  );
}
