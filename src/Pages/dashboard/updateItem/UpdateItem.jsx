import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { useLoaderData } from 'react-router-dom';
import { FaUtensils } from "react-icons/fa";


const UpdateItem = () => {
    const { register, handleSubmit } = useForm()
    const { name, price } = useLoaderData();
    console.log(name, price)

    const  onSubmit = () => {

    }
    return (
        <div>
            <SectionTitle heading={'update item'}></SectionTitle>
            <div className="p-8 rounded bg-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register('name', { required: true })}
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
                            <select defaultValue={'default'} {...register('category', { required: true })}
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
                                {...register('price', { required: true })}
                                type="number"
                                placeholder="price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-28" placeholder="details"></textarea>
                    </label>
                    <div>
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-ghost bg-gray-300 w-full max-w-xs" />
                    </div>

                    <button type="submit" className="btn rounded-none bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Update  Recipe <FaUtensils></FaUtensils> </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;