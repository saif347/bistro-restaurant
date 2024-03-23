import useMenu from '../useMenu';

const useCategory = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return[pizza,  dessert, soup, salad, offered, drinks];
};

export default useCategory;