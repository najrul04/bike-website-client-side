import React from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

const Explore = () => {
    
    const [date, setDate] = React.useState(new Date())

    return (
        <div>
            <ExploreHeader date={date} setDate={setDate}></ExploreHeader>
            <AvailableProducts date={date}></AvailableProducts>
        </div>
    );
};

export default Explore;