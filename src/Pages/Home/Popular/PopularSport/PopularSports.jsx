import React from 'react';
import useSports from '../../../../Hooks/useSports';
import Title from '../../../../SharedPages/Title/Title';
import SportsCard from '../../../../SharedPages/SportsCard/SportsCard';

const PopularSports = () => {
    const [sports] = useSports();
    // console.log(sports);
    const popularItems =sports.sort((a,b)=> b.totalStudent - a.totalStudent);
    
    const popular = popularItems.slice(0,6)
    
    return (
        <div>
            <Title headers="Popular Classes"></Title>

            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-10 mb-10'>
                <SportsCard data={popular}></SportsCard>
            </div>

        </div>
    );
};

export default PopularSports;