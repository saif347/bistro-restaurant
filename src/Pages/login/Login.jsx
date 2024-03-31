import bgImage from '../../assets/assets/reservation/wood-grain-pattern-gray1x.png'
import authImage from '../../assets/assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Login = () => {

    const {loginHandler, googleLogin}= useContext(GlobalContext)
    const axiosPublic = useAxiosPublic()

    const captchaRef = useRef(null)
    const [disabled , setDisabled]= useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin =(e)=>{
       e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password =  form.password.value;

        loginHandler(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from ,{ replace: true })
        })
        .catch(err => console.error('error', err))
    }

    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        console.log(value)
        if(validateCaptcha(value)){
            setDisabled(false);
        }
        else{
            setDisabled(true)
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleGoogleLogin= () =>{
        googleLogin()
        .then(res =>{
           const userInfo = {
            name: res.user?.displayName,
            email: res.user?.email
           }
           axiosPublic.post('/user', userInfo)
           .then(res=>{
            console.log(res.data)
           })
            navigate('/')
        })
        .catch(err=>console.error("Error", err));

    }
    return (
        <div className='min-h-screen flex items-center justify-center' style={{ backgroundImage: `url(${bgImage})` }}>
            <Helmet>
                <title>Bistro cafe | Login</title>
            </Helmet>
            <div className='flex justify-between items-center shadow-2xl px-24 py-10 max-w-7xl mx-auto' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='flex-1'>
                    <img className='w-full' src={authImage} alt="" />
                </div>
                <div className="hero flex-1 ">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Login</h1>

                        </div>
                        <div className="w-full">
                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered input-md w-[412px] " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <LoadCanvasTemplate />
                                    <label className="label">
                                        <span className="label-text">captcha</span>
                                    </label>
                                    <input ref={captchaRef} type="text" placeholder="Type captcha here" className="input input-bordered" />
                                    <button onClick={handleValidateCaptcha} className="btn btn-xs bg-[#1F2937] text-white mt-2">Validate</button>
                                </div>

                                <div className="form-control mt-6">
                                    {/* todo: reenable after */}
                                    <button disabled={false} className="btn  bg-[#D1A054] bg-opacity-70 text-white">Sign In</button>
                                </div>
                            </form>
                            <div>
                                <Link to={'/register'}><p className='text-[#D1A054] text-lg hover:underline text-center mt-2'>New here? Create a New Account</p></Link>

                                <div className='space-x-5 text-center mt-2'>
                                    <p className='text-center mb-3'>Or Sign in With</p>
                                    <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline'>G</button>
                                    <button className='btn btn-circle btn-outline'>F</button>
                                    <button className='btn btn-circle btn-outline'>T</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;