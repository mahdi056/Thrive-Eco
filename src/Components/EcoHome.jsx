import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";

const EcoHome = () => {
  const [ecoHome, setEcoHome] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/eco-home")
      .then((res) => { 
        console.log(res.data);
        setEcoHome(res.data)})
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/eco-home/${id}`);
  };

  const filteredItems = ecoHome.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Optional Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search eco-home product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="p-4 flex flex-col justify-between h-52">
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

export default EcoHome;
