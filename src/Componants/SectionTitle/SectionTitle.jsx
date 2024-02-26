import React from 'react';

const SectionTitle = ({heading,SubTitle}) => {
    return (
        <div className='py-16 max-w-[320px] mx-auto'>
            <p className='text-sm text-yellow-600 text-center  border-b-slate-500 mb-3'>{SubTitle}</p>
            <h1 className='text-2xl text-center font-bold text-slate-800 border-b-slate-500 uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;