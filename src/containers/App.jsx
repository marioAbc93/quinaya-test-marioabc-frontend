import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/css/base.css';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Productos from '../components/Productos';
const App = () => {
    const [ fotos, setImage ] = useState({  hits: [] });
    useEffect(() =>{
        fetch('https://pixabay.com/api/?key=17252011-33d8287ccd1766f9733ae9a8a&q=computer')
        .then(response => response.json())
        .then(data => setImage(data));
    }, []);
    return( 
    <div className="App">
        <Header />
        <Carousel>
            {fotos.hits.map(item =>
                <CarouselItem key={item.id}  {...item} />
            )}
        </Carousel>
        <Productos />       
    </div>
);
}

export default App;