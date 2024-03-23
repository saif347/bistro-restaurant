import bgImage from '../../assets/assets/reservation/wood-grain-pattern-gray1x.png'
import authImage from '../../assets/assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { GlobalContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser}= useContext(GlobalContext)
    const handleRegister =e=>{
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password =  form.password.value;

        // 
        createUser(email, password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(err =>{
            console.error(err);
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center' style={{ backgroundImage: `url(${bgImage})` }}>
            <Helmet>
                <title>Bistro cafe | Register</title>
            </Helmet>
            <div className='flex justify-between items-center shadow-2xl px-24 py-10 max-w-7xl mx-auto' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero flex-1 ">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Sign Up</h1>

                        </div>
                        <div className="w-full">
                            <form onSubmit={handleRegister} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type here" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered input-md w-[412px] " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  bg-[#D1A054] bg-opacity-70 text-white">Sign In</button>
                                </div>
                            </form>
                            <div>
                                <Link to={'/login'}><p className='text-[#D1A054] text-lg hover:underline text-center mt-2'>Have Account? Go to Login</p></Link>

                                <div className='space-x-5 text-center mt-2'>
                                    <p className='text-center mb-3'>Or Sign UP With</p>
                                    <button className='btn btn-circle btn-outline'>G</button>
                                    <button className='btn btn-circle btn-outline'>F</button>
                                    <button className='btn btn-circle btn-outline'>T</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-full' src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;