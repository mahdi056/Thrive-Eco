
const About = () => {
    return (
        <div>

<div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">About Us</h2>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
                Welcome to <span className="font-semibold text-green-500">ThriveEco</span> — your trusted platform for eco-friendly and sustainable products. We believe that conscious choices can lead to a cleaner, greener planet.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-green-500">Our Mission</h3>
                    <p className="text-gray-600">
                        Our mission is to make sustainable living easy and accessible. We connect you with eco-conscious products that support a better future — for you and the environment.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-green-500">What We Offer</h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-1">
                        <li>Eco-friendly tech gadgets</li>
                        <li>Sustainable home essentials</li>
                        <li>Conscious fashion & beauty products</li>
                        <li>Organic food & lifestyle items</li>
                        <li>Plastic-free & recyclable packaging</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-2 text-green-500">Why Choose ThriveEco?</h3>
                <p className="text-gray-600">
                    At ThriveEco, every product is handpicked with sustainability in mind. We work with ethical brands, support local artisans, and focus on reducing carbon footprints. Together, we can make a difference — one product at a time.
                </p>
            </div>
        </div>
            
        </div>
    );
};

export default About;