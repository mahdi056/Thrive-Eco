import { Link } from "react-router";

const Products = () => {
    const categories = [
        {
            name: "Eco Tech",
            description: "Sustainable gadgets and energy-efficient electronics.",
            route: "/products/eco-tech",
        },
        {
            name: "Eco Home",
            description: "Eco-friendly home goods for greener living.",
            route: "/products/eco-home",
        },
        {
            name: "Sustainable Fashion",
            description: "Stylish clothing made with sustainable materials.",
            route: "/products/sustainable-fashion",
        },
        {
            name: "Green Beauty",
            description: "Natural and cruelty-free skincare and cosmetics.",
            route: "/products/green-beauty",
        },
        {
            name: "Organic Food",
            description: "Healthy and organic food items for conscious living.",
            route: "/products/organic-food",
        },
        {
            name: "Eco Lifestyle",
            description: "Daily essentials and lifestyle items that are eco-conscious.",
            route: "/products/eco-lifestyle",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-600">
                Explore Product by Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-lg hover:shadow-xl border border-gray-200"
                    >
                        <div className="card-body">
                            <h2 className="card-title text-green-500">{category.name}</h2>
                            <p>{category.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={category.route}>
                                    <button className="btn btn-success btn-sm">View Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;