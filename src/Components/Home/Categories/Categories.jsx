import { useLoaderData } from "react-router-dom";
import Category from "./Category/Category";

export default function Categories() {
  const data = useLoaderData();
  const filteredCategories = data.categories.filter(
    (category) => category.strCategory !== "Pork"
  );
  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto py-24">
      <h1 className="mb-6 text-2xl font-bold mx-auto text-center bg-[#FFC107] rounded-lg p-4">
        All Meal By Categories
      </h1>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-8 ">
        {filteredCategories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
}
