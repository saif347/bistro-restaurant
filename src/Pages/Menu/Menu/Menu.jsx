import menuImg from '../../../assets/assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuDesert from '../../../assets/assets/menu/dessert-bg.jpeg'
import menuPizza from '../../../assets/assets/menu/pizza-bg.jpg'
import menuSalad from '../../../assets/assets/menu/salad-bg.jpg'
import menuSoup from '../../../assets/assets/menu/soup-bg.jpg'
import SectionTitle from '../../../components/sectiontitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';
import useCategory from '../../../hooks/categoryHooks/useCategory';

const Menu = () => {
    const [pizza,  dessert, soup, salad, offered] = useCategory()

    return (
        <div>
            <Helmet>
                <title>Bistro cafe | menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                coverTitle={'OUR MENU'}
                coverText={'Would You Like To Try Our Dish'}
            ></Cover>
            <section className='my-10 max-w-7xl mx-auto p-1'>
                <SectionTitle subHeading={'Do not miss'} heading={"today's offers"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>

            </section>
            {/* desert item */}
            <section className='my-10 '>
                 <MenuCategory items={dessert} img={menuDesert} title={'dessert'}></MenuCategory>
            </section>
            {/*  pizza item */}
            <section className='my-10 '>
                 <MenuCategory items={pizza} img={menuPizza} title={'pizza'}></MenuCategory>
            </section>
            {/*  salad */}
            <section className='my-10 '>
                 <MenuCategory items={salad} img={menuSalad} title={'salad'}></MenuCategory>
            </section>
            {/*  soup */}
            <section className='my-10 '>
                 <MenuCategory items={soup} img={menuSoup} title={'soup'}></MenuCategory>
            </section>

        </div>
    );
};

export default Menu;