import { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect((id) => {
        fetch(`toys.json/${id}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>

            <Tabs>
            {
                        toys.map(category => <Category
                            key={category.id}
                            category={category}
                        > </Category>)
                    }
                <TabList>
                    <Tab>Category 1</Tab>
                    <Tab>Category 2</Tab>
                    <Tab>Category 3</Tab>
                </TabList>
                

                <TabPanel>
                   
                    <div>
                        <h2>Sub-Category 1</h2>
                        <div>

                            {/* <img src="path/to/sub-category-1-image-2.jpg" alt="Sub-Category 1 Image 1" />
                            <img src="path/to/sub-category-1-image-2.jpg" alt="Sub-Category 1 Image 2" /> */}
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2>Sub-Category 2</h2>
                        <div>
                            {/* <img src="path/to/sub-category-2-image-1.jpg" alt="Sub-Category 2 Image 1" />
                            <img src="path/to/sub-category-2-image-2.jpg" alt="Sub-Category 2 Image 2" /> */}
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2>Sub-Category 3</h2>
                        <div>
                            {/* <img src="path/to/sub-category-3-image-1.jpg" alt="Sub-Category 3 Image 1" />
                            <img src="path/to/sub-category-3-image-2.jpg" alt="Sub-Category 3 Image 2" /> */}
                        </div>
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Toys;