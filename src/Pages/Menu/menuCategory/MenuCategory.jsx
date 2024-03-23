import { Link } from "react-router-dom";
import MenuItemCard from "../../../components/menucard/MenuItemCard";
import Cover from "../../shared/cover/Cover";
import PropTypes from 'prop-types';


const MenuCategory = ({ items, img, title }) => {
    return (
        <div>
            {
                title ? <Cover
                    img={img}
                    coverTitle={title}
                    coverText={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover> : ''
            }
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 max-w-7xl mx-auto p-1 my-5">
                {
                    items.map((item, index) => <MenuItemCard key={index}
                        dish={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="flex justify-center">
               <Link to={`/shop/${title}`}> <button className="btn btn-outline border-0 border-b-4 text-lg">Order Your Favorite Dish</button></Link>
            </div>

        </div>
    );
};
MenuCategory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string,
    img: PropTypes.string
};

export default MenuCategory;