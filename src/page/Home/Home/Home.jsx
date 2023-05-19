import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";


const Home = () => {
    return (
        <div>
            <h1>This is home </h1>
            <Banner></Banner>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Toys></Toys>

        </div>
    );
};

export default Home;
