

const Contact = () => {
    return (
        <div>
             <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 text-center mb-6">Contact Us</h2>

            <p className="text-center text-gray-700 mb-10">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-green-500 mb-2">📍 Address</h3>
                        <p className="text-gray-700">Sylhet, Bangladesh</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-500 mb-2">📧 Email</h3>
                        <p className="text-gray-700">ahnafmahdi12@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-500 mb-2">📞 Phone</h3>
                        <p className="text-gray-700">+880 1707226784</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" rows="4" placeholder="Write your message..." required></textarea>
                    </div>

                    <button className="btn btn-success text-black hover:bg-green-600 w-full">Send Message</button>
                </form>
            </div>
        </div>
            
        </div>
    );
};

export default Contact;