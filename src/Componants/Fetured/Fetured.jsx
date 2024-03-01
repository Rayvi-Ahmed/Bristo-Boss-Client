import feturedImage from '../../../src/assets/home/featured.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';

const Fetured = () => {

    return (
        <div style={{backgroundImage:`url(${feturedImage})`}} className="bg-fixed bg-no-repeat mb-6">

            <SectionTitle
            SubTitle={'Check it out'}
            heading={'From our home'}
            ></SectionTitle>



            <div className='flex  md:flex-row items-center justify-center gap-2 p-3 w-4/5 mx-auto relative top-0 bottom-8 '>
                <img className='h-[200px]' src={feturedImage} alt="" />

                <div className=''>
                    <p className='text-sm text-slate-200'>20, Aug, 2024</p>
                    <h1 className='text-xl text-slate-200'>WHERE CAN I GET SOME?</h1>
                    <p className='sm text-slate-200'>voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn border border-b-yellow-600 rounded-lg hover:bg-slate-500 hover:text-yellow-600 ">ADD TO CART</button>
                </div>

            </div>
            
        </div>
    );
};

export default Fetured;