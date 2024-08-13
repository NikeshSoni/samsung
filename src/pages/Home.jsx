import Navbar from "../components/Header/Navbar";
import Slider from '../components/Slider';
import Week from '../components/WeekHighilight/Week';
import CardWork from '../components/ProductsCards/CardWork'
import AddToCart from "../components/Header/AddToCart";
import { useState } from 'react';


const Home = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductMap, setSelectedProductMap] = useState([]);

  const handleAddToCart = (product) => {
         setSelectedProduct(product);

        //  selectedProductMap.length(0);

         setSelectedProductMap(selectedProduct)

        //  selectedProduct.push(selectedProductMap);

        console.log(selectedProduct);
  };

    return (
        <>
            <Navbar />
            <Slider />
            <Week />
            <CardWork  onAddToCart={handleAddToCart}/>
            <AddToCart product={selectedProduct}/>
        </>
    )
}

export default Home;