import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

const GreenBeautyDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/green-beauty/${id}`)
      .then((res) =>{
        // console.log(res.data);
         setProduct(res.data)})
      .catch((error) => console.error("Error fetching details", error));
  }, [id]);

  if (!product) return <div className="text-center py-10">
  <span className="loading loading-spinner text-success"></span>
</div>;



  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-white shadow-lg rounded-xl mb-12 mt-12">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-contain rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-green-700 mb-2">
        Price: {product.price} BDT
      </p>
      
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Category:</span> {product.category}
      </p>
      
      <p className="text-gray-600">
        <span className="font-medium"></span>{" "}
        {product.available ? "In Stock" : "Out of Stock"}
      </p>

      <div className="flex gap-2 mt-4">
        <button className="btn btn-success">Add To Cart <FiShoppingCart></FiShoppingCart></button>
        <Link to="/green-beauty">
          <button className="btn btn-info">Back to products</button>
        </Link>
      </div>
    </div>
  );
};

export default GreenBeautyDetails;
