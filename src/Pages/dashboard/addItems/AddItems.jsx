import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxios from "../../../hooks/useAxios";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const  ImageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()

    const onSubmit = async(data) => {
        console.log(data)
        // hosting image
        const imageFile = { image: data.image[0]}
        const res = await  axiosPublic.post(ImageHostingUrl,imageFile, {
            headers:{
                "Content-Type": 'multipart/form-data'
            }
        })
        if(res.data.success){
            // send data to server with image url
            const menuItem ={
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url

            }
            const menuRes = await axiosSecure.post( '/menu', menuItem )
            if(menuRes.data.insertedId) {
                alert('item added successfully')
            }
            console.log(menuRes.data);
        }
        console.log('with image',res.data)
    }
    return (
        <div className="max-w-5xl mx-auto lg:my-16">
            <SectionTitle subHeading={'what is new'} heading={'add an item'}></SectionTitle>
            <div className="p-8 rounded bg-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register('name',{required: true})}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={'default'} {...register('category',{required: true})}
                                className="select select-bordered w-full">
                                <option disabled value={'default'}>Category</option>
                                <option value="Salad">Salad</option>
                                <option value="Soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="pizza">pizza</option>
                                <option value="drink">drink</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register('price',{required: true})}
                                type="number"
                                placeholder="price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea {...register('recipe',{required: true})} className="textarea textarea-bordered h-28" placeholder="details"></textarea>
                    </label>
                    <div>
                        <input type="file" {...register('image',{required: true})} className="file-input file-input-ghost bg-gray-300 w-full max-w-xs" />
                    </div>

                    <button type="submit" className="btn rounded-none bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add New  Recipe <FaUtensils></FaUtensils> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;