import PropTypes from 'prop-types';

const MenuItemCard = ({dish}) => {
    const {name,recipe, image, price}= dish;
    return (
        <div className='flex space-y-2  p-1'>
            <img className='w-[100px] h-24 rounded-tl-none rounded-[200px]' src={image} alt="" />
           <div className='ml-4'>
            <h3 className='text-xl font-semibold text-[#737373] '>{name}------------</h3>
            <p className='text-sm text-[#737373]'>{recipe}</p> 
           </div>
            <p className='text-amber-500'>{price}$</p>
        </div>
    );
};
MenuItemCard.propTypes={
    dish: PropTypes.object
}
export default MenuItemCard;