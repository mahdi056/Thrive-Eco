import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";

const EcoTech = () => {
  const [ecoTech, setEcoTech] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/eco-tech")
      .then((res) => setEcoTech(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 

  const filteredItems = ecoTech.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleViewDetails = (id) => {
    navigate(`/eco-tech/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">


      {/* 🔍 Search Box */}
      <div className="mb-6">

        <input

          type="text"
          placeholder="Search eco-tech product..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

      </div>

      {/* 🧾 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {filteredItems.map((item, index) => (
          <div
            key={index}
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
    </div>
  );
};

export default EcoTech;
