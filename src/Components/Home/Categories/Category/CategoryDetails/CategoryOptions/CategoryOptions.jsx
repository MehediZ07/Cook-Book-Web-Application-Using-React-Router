import { useNavigate } from "react-router-dom";
export default function CategoryOptions({ category }) {
  const navigate = useNavigate();
  const handleGoCook = () => {
    navigate(`/gooCook/${category.strMeal}`);
  };

  return (
    <div className="mb-6 mx-auto shadow-xl border solid border-gray-300 rounded-xl w-full">
      <img
        src={category.strMealThumb}
        alt=""
        className="w-[16rem] mx-auto rounded-xl h-[16rem] m-8"
      />

      <div className="text-xl text-center justify-center font-bold  gap-6 my-6">
        <h1>{category.strMeal}</h1>
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
