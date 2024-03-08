import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import menuImage from '../../../src/assets/menu/banner3.jpg'
import desserts from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../src/assets/menu/pizza-bg.jpg'
import soupImage from '../../../src/assets/menu/soup-bg.jpg'
import saladImage from '../../../src/assets/menu/salad-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import offerImage from '../../../src/assets/home/chef-service.jpg'
import useMenu from '../../Shared/Hook/useMenu';
import SectionTitle from '../../Componants/SectionTitle/SectionTitle';
import MenuItems from './MenuItems/MenuItems';

const Menu = () => {
    const [menus]=useMenu([])


    const pizza=menus.filter(pz=>pz.category==='pizza').slice(0,4)
    const dessert =menus.filter(pz=>pz.category==='dessert').slice(0,4)
    const soup=menus.filter(pz=>pz.category==='soup').slice(0,4)
    const offered=menus.filter(pz=>pz.category==='offered').slice(0,4)
    const salad=menus.filter(pz=>pz.category==='salad').slice(0,4)

    return (
        <div>

            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>
           
           
           
            {/* Main Cover  */}
            <Cover img={menuImage} title={'Menu Item'}></Cover>


            {/* Offer Title  */}
            <SectionTitle
            SubTitle={'Get the Todays Offer'}
            heading={'todays offer'}
        
            ></SectionTitle>

            {/* Offer Item  */}
            <MenuItems
            items={offered}
            title={'offer'}
            image={offerImage}
            ></MenuItems>


            {/* Desserts Item  */}

            <SectionTitle
            SubTitle={'Check it Out for Dessert item'}
            heading={'Dessert Item'}
            
            >

            </SectionTitle>

             <MenuItems 
             items={dessert}
             title={"Desserts"}
             image={desserts}
            
             >
             </MenuItems>




             {/* Pizza Item  */}

             <SectionTitle
             SubTitle={'----- have a enjoy Italian Piza----'}
             heading={'Pizza'}
             ></SectionTitle>

             <MenuItems
             items={pizza}
             title={'Pizza'}
             image={pizzaImage}
             
             ></MenuItems>




             {/* Soup Item  */}

             <SectionTitle
             SubTitle={'---- Have enjoy Continantal Soup----'}
             heading={'soup'}
             ></SectionTitle>

             <MenuItems
             items={soup}
             image={soupImage}
             title={'Soup'}

             ></MenuItems>




             {/* Salad item */}
             <SectionTitle
             SubTitle={'------- Check it out for Spenish salad------'}
             heading={'Salad'}
             ></SectionTitle>
             <MenuItems
             items={salad}
             title={'Salad'}
             image={saladImage}
             ></MenuItems>
    
            </div>
    );
};

export default Menu;