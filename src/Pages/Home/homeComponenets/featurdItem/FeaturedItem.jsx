import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import featured from '../../../../assets/assets/home/featured.jpg'
import './featured.css'

const FeaturedItem = () => {
    return (
        <div className="my-16 bg-img bg-fixed text-white">
            <div className="bg-gray-800 bg-opacity-40 ">
                <div className="py-20">
                    <SectionTitle subHeading={'check it out'} heading={'Featured item'}></SectionTitle>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 mt-4">
                        <img className="w-[600px]" src={featured} alt="" />
                        <div className="space-y-3">
                            <p className="text-lg font-medium">Mar 7, 2024</p>
                            <h3 className="text-2xl">Where Can I Get Some</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt inventore unde ducimus molestias odio vitae quos numquam, voluptatem, nostrum dolores suscipit dolore quod ex similique repellendus eaque quis excepturi fugit incidunt dolorem nulla rem dicta? alias.</p>
                            <button className="btn btn-outline border-0 border-b-4 border-b-white text-white">See More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItem;