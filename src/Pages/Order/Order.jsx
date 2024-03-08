import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';

// Order Page cover image 
import orderImage from '../../../src/assets/shop/banner2.jpg'

// Import tab list 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Shared/Hook/useMenu';
import FoodCard from '../../Componants/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    // import all menu catagory fro useMenu hook

    const [menus]=useMenu([])

    const categories=['Salad','Pizza','Dessert','Drinks','Soup']  
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)

    const [tabindex,setTabIndex]=useState(initialIndex)

    const pizza=menus.filter(pz=>pz.category==='pizza')
    const dessert =menus.filter(pz=>pz.category==='dessert')
    const soup=menus.filter(pz=>pz.category==='soup')
    const salad=menus.filter(pz=>pz.category==='salad')
    const drinks=menus.filter(pz=>pz.category==='drinks')

    return (
        <div>
            <Cover img={orderImage} title={'Order Now'}></Cover>

   <div className='py-16 w-full mx-auto'>
   <Tabs  selectedIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
            
            <TabList>
                <Tab >All Food</Tab>
                <Tab>Pizza</Tab>
                <Tab>Salad</Tab>
                <Tab>Soup</Tab>
                <Tab>Desserts</Tab>
                <Tab>Drinks</Tab>
            </TabList>

          <TabPanel>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2'>
                    
                {
                                menus.map(item=><FoodCard
                                key={item._id}
                                item={item}
                                ></FoodCard>)
                            }
                </div>


            </TabPanel>
          <TabPanel>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2'>
                    
                {
                                pizza.map(item=><FoodCard
                                key={item._id}
                                item={item}
                                ></FoodCard>)
                            }
                </div>


            </TabPanel>

    
            <TabPanel>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 '>
                    
                    {
                                    salad.map(item=><FoodCard
                                    key={item._id}
                                    item={item}
                                    ></FoodCard>)
                                }
                    </div>

            </TabPanel>
            <TabPanel>

                
            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2'>
                    
                    {
                                    soup.map(item=><FoodCard
                                    key={item._id}
                                    item={item}
                                    ></FoodCard>)
                                }
                    </div>
            </TabPanel>
            <TabPanel>

                
            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2'>
                    
                    {
                                    dessert.map(item=><FoodCard
                                    key={item._id}
                                    item={item}
                                    ></FoodCard>)
                                }
                    </div>
            </TabPanel>
            <TabPanel>
         
            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2'>
                    
                    {
                                    drinks.map(item=><FoodCard
                                    key={item._id}
                                    item={item}
                                    ></FoodCard>)
                                }
                    </div>

            </TabPanel>
    </Tabs>
   </div>
            
        </div>
    );
};

export default Order;