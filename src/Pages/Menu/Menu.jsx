import React from 'react';
import {Helmet} from "react-helmet";
import menuImage from '../../../src/assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Componants/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>

            <Cover img={menuImage} title={'Menu Salad'}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImage} title={'Menu Salad'}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImage} title={'Menu Salad'}></Cover>
            <PopularMenu></PopularMenu>
            </div>
    );
};

export default Menu;