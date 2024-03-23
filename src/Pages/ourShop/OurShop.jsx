import Cover from "../shared/cover/Cover";
import shop from '../../assets/assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useCategory from "../../hooks/categoryHooks/useCategory";
import FoodCard from "../../components/foodCard/FoodCard";
import { useParams } from "react-router-dom";


const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category}= useParams()
    const initialIndex = categories.indexOf(category);
    const [pizza, dessert, soup, salad,drinks] = useCategory()
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <Cover img={shop} coverTitle={'OUR SHOP'} coverText={'Would You Like To Try A Dish'}></Cover>

            <div className="max-w-7xl mx-auto my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;