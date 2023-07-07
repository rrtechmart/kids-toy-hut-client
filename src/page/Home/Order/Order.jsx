import { useState } from "react";
import UseToy from "../../../Hooks/UseToy";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from "./OrderTab";


const Order = () => {
    const [toys] = UseToy();
    const initialIndex = toys.indexOf(toys)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const policeCar = toys.filter(items => items.category === ('policeCar'))
    const racingCar = toys.filter(items => items.category === ('racingCar'))
    const constructionCar = toys.filter(items => items.category === ('constructionCar'))

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-center mb-6">Category of Toys </h2>
                <p className="text-lg">Explore a world of wonder with our diverse range of toys. Our different toys inspire learning, problem-solving, and creativity. Racing toys offer active play and adventure, from ride-on vehicles to sports equipment. Find comfort and companionship with our huggable plush toys. Each category is carefully curated for safety, durability, and maximum enjoyment. Spark curiosity, ignite imagination, and create cherished memories with our exceptional toys.</p> <br />
                <p className="text-lg font-medium text-blue-600">
                You are requested to visit our different categories of toy over the following different 3 tabs.
                </p>
            </div>

            <div className="mb-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Police Car</Tab>
                        <Tab>Racing Car</Tab>
                        <Tab>Construction Car</Tab>
                    </TabList>
                    <TabPanel> <OrderTab items={policeCar}></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={racingCar}></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={constructionCar}></OrderTab> </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default Order;