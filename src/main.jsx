import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Components/Home/Categories/Categories";

import Area from "./Components/Home/Area/Area";
import AreaFoodOption from "./Components/Home/Area/AreaFoods/AreaFoodOption/AreaFoodOption";
import CategoryDetails from "./Components/Home/Categories/Category/CategoryDetails/CategoryDetails";
import GooCook from "./Components/Home/GooCook/GooCook";
import Home from "./Components/Home/Home";
import RandomMeal from "./Components/Home/RandomMeal/RandomMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories />,
      },
      {
        path: "/Categories",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories></Categories>,
      },
      {
        path: "/category/:strCategory",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
          ),
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/Area",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
        element: <Area></Area>,
      },
      {
        path: "/areaFood/:strArea",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.strArea}`
          ),
        element: <AreaFoodOption></AreaFoodOption>,
      },
      {
        path: "/gooCook/:strMeal",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strMeal}`
          ),
        element: <GooCook></GooCook>,
      },
      {
        path: "/RandomMeal",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
        element: <RandomMeal></RandomMeal>,
      },

      // {
      //   path: "/About",
      //   element: <About></About>,
      // },
    ],
  },
  // {
  //   path: "/Categories",
  //   element: <div>This is Categories</div>,
  // },
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
