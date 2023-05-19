import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <div>
            <h2>Sub-Category 1</h2>
            <img src="path/to/sub-category-1-image-1.jpg" alt="Sub-Category 1 Image 1" />
            <img src="path/to/sub-category-1-image-2.jpg" alt="Sub-Category 1 Image 2" />
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <h2>Sub-Category 2</h2>
            <img src="path/to/sub-category-2-image-1.jpg" alt="Sub-Category 2 Image 1" />
            <img src="path/to/sub-category-2-image-2.jpg" alt="Sub-Category 2 Image 2" />
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <h2>Sub-Category 3</h2>
            <img src="path/to/sub-category-3-image-1.jpg" alt="Sub-Category 3 Image 1" />
            <img src="path/to/sub-category-3-image-2.jpg" alt="Sub-Category 3 Image 2" />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
