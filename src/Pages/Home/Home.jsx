import ChefRecommends from "./homeComponenets/ChefRecomands/ChefRecommends";
import PopularMenu from "./homeComponenets/PopularMenu/PopularMenu";
import Banner from "./homeComponenets/banner/Banner";
import BistroBoss from "./homeComponenets/bistroBoss/BistroBoss";
import FoodCategory from "./homeComponenets/foodCategory/FoodCategory";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FoodCategory></FoodCategory>
           <BistroBoss></BistroBoss>
           <PopularMenu></PopularMenu>
           <div className="max-w-7xl mx-auto my-20 h-36 bg-black flex justify-center items-center">
                <p className="lg:text-3xl font-bold text-white">Call Us: +88 0192345678910 </p>
           </div>
           <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;