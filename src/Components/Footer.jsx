import logo from '../assets/T.png'

const Footer = () => {
    return (
        <footer className="bg-green-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                {/* Logo + Intro */}
                <div>


                    <h2 className="text-2xl font-bold text-green-600 mb-2">ThriveEco</h2>

                    <p className="text-sm">
                        ThriveEco is your one-stop shop for eco-friendly, sustainable, and recycled products. Let’s build a greener future together!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/products" className="hover:underline">Products</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Product Categories</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Eco Tech</li>
                        <li>Eco Home</li>
                        <li>Sustainable Fashion</li>
                        <li>Green Beauty</li>
                        <li>Organic Food</li>
                        
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>

                    <p className="text-sm">Email: ahnafmahdi12@gmail.com</p>
                    <p className="text-sm">Phone: +880 1707226784</p>
                    <p className="text-sm">Sylhet, Bangladesh</p>
                </div>
            </div>

            <div className="text-center py-4 border-t border-gray-300 text-sm">
                © {new Date().getFullYear()} ThriveEco. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
