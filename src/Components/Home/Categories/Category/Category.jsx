import { useNavigate } from "react-router-dom";

export default function Category({ category }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/category/${category.strCategory}`);
  };
  return (
    <div className="mb-6 mx-auto shadow-xl border solid border-gray-300 rounded-xl w-full">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-[16rem] mx-auto rounded-xl h-[16rem] m-8"
      />

      <div className="text-xl text-center justify-center font-bold  gap-6 my-6">
        <h1>{category.strCategory}</h1>
        <button
          className="btn  bg-[#FFC107] text-xl font-bold text-gray-700 mt-6"
          onClick={handleDetails}
        >
          See All {category.strCategory}
        </button>
      </div>
    </div>
  );
}
