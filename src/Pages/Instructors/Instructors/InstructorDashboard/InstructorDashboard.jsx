import React from 'react';
import useMyClass from '../../../../Hooks/useMyClass';

const InstructorDashboard = () => {

    const [myClass] = useMyClass();

    return (
        <div>
            <div className='flex justify-evenly gap-x-10 text-center   flex-1'>
                <div className='bg-orange-500 py-10 px-10 flex-1'>
                    <h2 className='text-1xl font-semibold text-white'>My Classes</h2>
                    <span className='text-[#FFFFFF] text-2xl'>{myClass.length}</span>
                </div>
                <div className='bg-blue-500 py-10 px-10 flex-1'>
                <h2 className='text-1xl font-semibold text-white'>Total Students</h2>
                    <span className='text-[#FFFFFF] text-2xl'>00</span>
                </div>
                <div className='bg-light-green-500 py-10 px-10 flex-1'>
                <h2 className='text-1xl font-semibold text-white'>My Lesson</h2>
                    <span className='text-[#FFFFFF] text-2xl'>00</span>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;