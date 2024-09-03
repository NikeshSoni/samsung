import Navbar from "../components/Header/Navbar";
import Slider from '../components/Slider';
import Week from '../components/WeekHighilight/Week';
import CardWork from '../components/ProductsCards/CardWork'
import AddToCart from "../components/Header/AddToCart";
import { useState , useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
          // Check if the product is already in the cart
          const existingProduct = prevCart.find((item) => item.id === product.id);
          if (existingProduct) {
            // If it is, increase the quantity
            return prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // If it's not, add the product with quantity 1
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
    
      const handleUpdateQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      };
    
      const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      };

    return (
        <>
            <Navbar />
            <Slider />
            <Week />
            <CardWork onAddToCart={handleAddToCart} />
            <AddToCart cartData={cart} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity}  />

            {/* product={cartItems} */}
        </>
    )
}

export default Home;