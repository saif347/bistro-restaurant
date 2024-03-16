
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import MenuItemCard from "../../../../components/menucard/MenuItemCard";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]= useMenu();
    const popularDishes = menu.filter(item => item.category === 'popular');

    return (
        <div className="max-w-7xl mx-auto p-1">
            <SectionTitle
                subHeading={'check it out'}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-2">
                {
                    popularDishes.map((dish, index) => <MenuItemCard key={index}
                        dish={dish}
                    ></MenuItemCard>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 mt-3 ">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;