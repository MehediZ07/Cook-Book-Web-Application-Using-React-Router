import { useLoaderData, useNavigate } from "react-router-dom";
export default function GooCook() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const meal = data.meals[0];
  return (
    <div className="mb-12  px-4 rounded-xl  w-11/12 lg:w-9/12 mx-auto ">
      <div className="text-xl text-center justify-center font-bold space-y-6  gap-6 my-6">
        <h1 className="text-2xl font-bold mb-6 w-fit mx-auto text-center bg-[#ffc1076e] rounded-lg p-4">
          {meal.strMeal}
        </h1>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className=" md:w-[400px] lg:w-[500px] h-auto mx-auto rounded-xl"
        />
        <p>
          <strong>Category:</strong> {meal.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {meal.strArea}
        </p>
        <p>
          <strong>Instructions:</strong> {meal.strInstructions}
        </p>
        <p>
          <strong>Tags:</strong> {meal.strTags}
        </p>
        <h2 className="text-xl font-semibold">Ingredients:</h2>
        <ul>
          {Array.from({ length: 20 }).map((_, index) => {
            const ingredient = meal[`strIngredient${index + 1}`];
            const measure = meal[`strMeasure${index + 1}`];
            return ingredient && ingredient.trim() !== "" ? (
              <li key={index}>
                {measure} {ingredient}
              </li>
            ) : null;
          })}
        </ul>
        {meal.strYoutube && (
          <div className="mt-4">
            <strong>▶️ Watch on YouTube:</strong>{" "}
            <a
              className="text-red-400"
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </div>
        )}
        <button
          onClick={handleGoBack}
          className="btn bg-[#FFC107] text-xl font-bold text-gray-700 mt-6"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
