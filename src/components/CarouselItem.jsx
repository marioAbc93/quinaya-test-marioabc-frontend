import React from  'react';

const CarouselItem = ({ webformatURL, user }) => (   
            <li>
                <img src={webformatURL} alt={user} />
            </li>       	    
);
export default CarouselItem;