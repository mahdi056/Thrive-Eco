import { Link } from "react-router";
import banner from '../assets/banner.jpg'
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Home = () => {

    
    return (
        <div>

            {/* Banner */}

            <section className="bg-cover bg-center h-96 flex flex-col items-center justify-center gap-y-12" style={{ backgroundImage: `url(${banner})` }}>


                <div className="space-y-8 mt-12">
                    <h1 className="text-white text-4xl font-bold text-center ">Welcome to ThriveEco</h1>
                    <p className="text-white text-center px-12">Discover a better way to shop sustainably. Eco-friendly products that protect our planet 🌍</p>
                </div>

                <div className="flex justify-center">
                    <Link to='/products'>
                        <button className="btn btn-success">Explore</button>
                    </Link>
                </div>


            </section>


            

        </div>
    );
};

export default Home;