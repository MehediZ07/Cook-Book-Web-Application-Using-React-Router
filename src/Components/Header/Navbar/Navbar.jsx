import Headroom from "react-headroom";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Navbar() {
  const users = useLoaderData();
  const navigate = useNavigate();

  const handleDetailsCategories = () => {
    navigate(`/Categories`);
  };

  const handleDetailsArea = () => {
    navigate(`/Area`);
  };
  const handleDetailsIngredients = () => {
    navigate(`/RandomMeal`);
  };
  return (
    <Headroom>
      <div className="bg-opacity-50 backdrop-blur-sm bg-white ">
        <nav className="flex flex-col md:flex-row gap-2 justify-between items-center py-3 w-11/12 lg:w-9/12 md:py-6  mx-auto">
          <h1 className=" text-2xl font-bold text=[#403F3F] md:order-1">
            Cook <span className="text-[#ffc107d8]">Book</span>
          </h1>
          <div className="flex  gap-4 text=[#403F3F] text-base  md:text-xl font-bold order-3 md:order-2">
            <button
              className=" p-2 m2 border solid border-yellow-500 rounded-lg"
              onClick={handleDetailsCategories}
            >
              Categories
            </button>
            <button
              className=" p-2 m2 border solid border-yellow-500 rounded-lg"
              onClick={handleDetailsArea}
            >
              Area
            </button>
            <button
              className=" p-2 m2 border solid border-yellow-500 rounded-lg"
              onClick={handleDetailsIngredients}
            >
              Random Meal
            </button>
          </div>
          <button className="bg-[#ffc107d8] font-bold text-2xl text-[#403F3F] py-2 px-4 rounded-lg md:order-3">
            Sign Up
          </button>
        </nav>
      </div>
    </Headroom>
  );
}

// import { Link, useLoaderData, useNavigate } from "react-router-dom";

// const users = useLoaderData();
// const navigate = useNavigate();

// const handleDetails = () => {
//   navigate(`/users/${user.id}`);
// };

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center my-6 w-11/12 lg:w-9/12 mx-auto">
//       <h1 className=" text-2xl font-bold text=[#403F3F]">Tasty HUT</h1>
//       <div className="flex gap-4 text=[#403F3F] text-xl font-bold">
//         <Link to={`/users/${user.id}`}>Go Details</Link>
//         <button onClick={handleDetails}>Details</button>
//       </div>
//       <button className="bg-[#FFC107] font-bold text-2xl text-[#403F3F] py-2 px-4 rounded-lg">
//         Sign Up
//       </button>
//     </nav>
//   );
// }
