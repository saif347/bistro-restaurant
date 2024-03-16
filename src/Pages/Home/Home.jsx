import { Helmet } from "react-helmet-async";
import ChefRecommends from "./homeComponenets/ChefRecomands/ChefRecommends";
import PopularMenu from "./homeComponenets/PopularMenu/PopularMenu";
import Banner from "./homeComponenets/banner/Banner";
import BistroBoss from "./homeComponenets/bistroBoss/BistroBoss";
import FeaturedItem from "./homeComponenets/featurdItem/FeaturedItem";
import FoodCategory from "./homeComponenets/foodCategory/FoodCategory";
import Testimonials from "./homeComponenets/testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <div className="max-w-7xl mx-auto my-20 h-36 bg-black flex justify-center items-center">
                <p className="lg:text-3xl font-bold text-white">Call Us: +88 0192345678910 </p>
            </div>
            <ChefRecommends></ChefRecommends>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;