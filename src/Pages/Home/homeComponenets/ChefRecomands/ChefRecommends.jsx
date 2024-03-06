import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import salad from '../../../../assets/assets/menu/salad-bg.jpg'
import salad2 from '../../../../assets/assets/menu/salad-bg.jpg'
import salad3 from '../../../../assets/assets/menu/salad-bg.jpg'

const ChefRecommends = () => {
    return (
        <div className="max-w-7xl mx-auto my-16 p-1">
            <SectionTitle
                subHeading={'Should try'}
                heading={'Chef Recommends'}
            ></SectionTitle>

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={salad} alt="dish" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className=" px-4 py-2 rounded-md border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={salad2} alt="dish" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className=" px-4 py-2 rounded-md border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={salad3} alt="dish" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className=" px-4 py-2 rounded-md border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;