import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const {name,recipe, image, price, _id }= item;
    const {user}= useAuth()
    const axiosSecure = useAxios()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch]= useCart()

    const handleAddToCart =()=>{
        if(user && user.email){
            //  send  request to add the food to the users shopping list
            const cartItem ={
                menuItemId: _id,
                email: user.email,
                menuName: name,
                image: image ,
                price: price 
            }

            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name}added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch to updated  the UI with new added items
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "please login to add to cart",
                text: "do you want to login now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="lg:w-96 p-2 shadow-xl relative">
                    <figure><img className='rounded-lg' src={image} alt={name} /></figure>
                    <p className='p-2 bg-[#1F2937] text-white w-16 rounded-lg absolute top-2 right-5'>{price}$</p>
                    <div className="card-body ">
                        <h2 className="card-title justify-center">{name}</h2>
                        <p className="text-center">{recipe}</p>
                        <div className="card-actions justify-center">
                            <button onClick={handleAddToCart} className=" px-4 py-2 rounded-md border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]">Add To Cart</button>
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