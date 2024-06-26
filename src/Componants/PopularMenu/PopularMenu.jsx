
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import useMenu from '../../Shared/Hook/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
   
    const [menus]=useMenu([])
    


    const popularMenu=menus.filter(item=>item.category==='popular')

    
    return (
      <section className='mb-6'>
        <SectionTitle
        SubTitle={'Check it Out'}
        heading={'From our menu'}
        >      
        </SectionTitle>

        <div className='grid grid-cols-2 gap-10'>

        {
            popularMenu.map(item=><MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }

        </div>
        <div className='my-4 text-center'>
         <Link to={'/menu'}> <button className='tex-yellow-600 px-5 py-3 rounded-lg bg-slate-200 border border-b-yellow-500 hover:bg-slate-700 hover:text-yellow-600'>See All</button></Link>
        </div>

      </section>
    );
};

export default PopularMenu;