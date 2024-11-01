import { useNavigate } from "react-router-dom";
export default function AreaFoods({ area }) {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/areaFood/${area.strArea}`);
  };

  return (
    <div className=" bg-[#ffc10775] p-4 rounded-xl flex justify-center">
      <button
        onClick={handleDetails}
        className="text-2xl font-bold text-gray-600"
      >
        {area.strArea}
      </button>
    </div>
  );
}
