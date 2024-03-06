import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import MenuItemCard from "../../../../components/menucard/MenuItemCard";


const PopularMenu = () => {
        const [popularDishes, setPopularDishes] = useState([])

        useEffect(()=>{
            fetch('menu.json')
            .then(res => res.json())
            .then(data =>{
                const popularMenu = data.filter(item => item.category === 'popular');
                setPopularDishes(popularMenu)
                console.log(popularMenu)
            })
        },[])
    return (
        <div className="max-w-7xl mx-auto p-1">
            <SectionTitle
            subHeading={'check it out'}
            heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-2">
                {
                    popularDishes.map((dish,index)=> <MenuItemCard key={index}
                    dish={dish}
                    ></MenuItemCard> )
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;