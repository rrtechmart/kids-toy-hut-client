import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import BestSeller from "../BestSeller";
import NewArrival from "../NewArrival";


const Home = () => {
    return (
        <div>
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
