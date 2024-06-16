import Navbar from "../components/Header/Navbar";
import Slider from '../components/Slider';
import Week from '../components/WeekHighilight/Week';
import CardWork from '../components/ProductsCards/CardWork'

const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Week />
            <CardWork />
        </>
    )
}

export default Home;