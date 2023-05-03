import React from 'react';
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondar text-center mt-5'>
            <h4>Q Zone</h4>
        <div>
            <img className='p-2 w-100 bg-light' src={QZone1} alt="" />
            <img className='p-2 w-100 bg-light' src={QZone2} alt="" />
            <img className='p-2 w-100 bg-light' src={QZone3} alt="" />
        </div>
        </div>
    );
};

export default QZone;