import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import BestSeller from "../BestSeller";
import NewArrival from "../NewArrival";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Kids Toy Hut | Home</title>
            </Helmet>

            <Banner></Banner>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Toys></Toys>
            <BestSeller></BestSeller>
            <NewArrival></NewArrival>

        </div>
    );
};

export default Home;
