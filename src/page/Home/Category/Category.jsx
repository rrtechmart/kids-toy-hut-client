
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = ({ category }) => {
    const { id, name, image, price } = category;
    console.log(name, image)



    return (

        <TabPanel>
            <img src={image} alt="Sub-Category 2 Image 1" />
            <img src={image} alt="Sub-Category 2 Image 2" />
        </TabPanel>



    );
};

export default Category;
