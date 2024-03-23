import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const {name,recipe, image, price }= item;
    return (
        <div>
            <div className="lg:w-96 p-2 shadow-xl relative">
                    <figure><img className='rounded-lg' src={image} alt={name} /></figure>
                    <p className='p-2 bg-[#1F2937] text-white w-16 rounded-lg absolute top-2 right-5'>{price}$</p>
                    <div className="card-body ">
                        <h2 className="card-title justify-center">{name}</h2>
                        <p className="text-center">{recipe}</p>
                        <div className="card-actions justify-center">
                            <button className=" px-4 py-2 rounded-md border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]">Add To Cart</button>
                        </div>
                    </div>
            </div>
            

        </div>
    );
};
FoodCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  
};

export default FoodCard;