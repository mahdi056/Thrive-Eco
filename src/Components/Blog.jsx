import logo from '../assets/T.png'

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            title: "Top 5 Eco-Friendly Gadgets in 2025",
            description: "Discover the latest sustainable tech products designed to reduce your carbon footprint while keeping you connected.",
            date: "April 5, 2025",
            author: "Ahnaf Chowdhury Mahdi",
        },
        {
            id: 2,
            title: "Sustainable Fashion Trends You Need to Know",
            description: "Learn how ethical clothing is shaping the fashion industry and what to look for when buying eco-friendly outfits.",
            date: "March 22, 2025",
            author: "Elina Akter",
        },
        {
            id: 3,
            title: "Benefits of Organic Food for You and the Planet",
            description: "Explore how choosing organic food not only improves your health but also supports biodiversity and the environment.",
            date: "March 10, 2025",
            author: "Riaz Hossain",
        },
    ];


    return (
        <div>

<div className="max-w-6xl mx-auto px-4 py-12">
           <div className='flex gap-x-4 items-center justify-center mb-10'>
            <img className='w-12 h-12' src={logo} alt="" />
           <h2 className="text-4xl font-bold text-green-600 text-center">ThriveEco Blog</h2>
           </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                    <div key={post.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
                        <div className="card-body">
                            <h3 className="card-title text-green-600">{post.title}</h3>
                            <p className="text-gray-600">{post.description}</p>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>By {post.author}</p>
                                <p>{post.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
        </div>
    );
};

export default Blog;