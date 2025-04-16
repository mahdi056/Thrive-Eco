import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const GreenBeauty = () => {
  const [greenBeauty, setGreenBeauty] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/green-beauty")
      .then((res) => setGreenBeauty(res.data))
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/green-beauty/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {greenBeauty.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-contain"
          />
          <div className="p-4 flex flex-col justify-between gap-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              
              <p>
                <span className="font-bold">Price:</span> {item.price} BDT
              </p>
            </div>
            
            <button
              onClick={() => handleViewDetails(item._id)}
              className="btn btn-soft btn-info py-2 px-4 rounded-l transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GreenBeauty;
