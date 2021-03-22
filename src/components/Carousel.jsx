import React from  'react';
const Carousel = ({ children }) => (
    <section>
        <div classname="slider-container">
            <div className="slider">
                <ul>
                    {children}
                </ul>  
            </div>	
        </div>
    </section>
);
export default Carousel;