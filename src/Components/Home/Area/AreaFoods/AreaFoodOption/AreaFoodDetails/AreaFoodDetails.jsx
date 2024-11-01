import { useLoaderData, useNavigate } from "react-router-dom";
export default function AreaFoodDetails({ item }) {
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleGoCook = () => {
    navigate(`/gooCook/${item.strMeal}`);
  };
  return (
    <div className="mb-6 mx-auto shadow-xl border solid border-gray-300 rounded-xl w-full">
      <img
        src={item.strMealThumb}
        alt=""
        className="w-[16rem] mx-auto rounded-xl h-[16rem] m-8"
      />

      <div className="text-xl text-center justify-center font-bold  gap-6 my-6">
        <h1>{item.strMeal}</h1>
        <button
          className="btn bg-[#FFC107] text-xl font-bold text-gray-700 mt-6"
          onClick={handleGoCook}
        >
          Start Cooking
        </button>
      </div>
    </div>
  );
}
