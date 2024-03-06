import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../../assets/assets/home/slide1.jpg'
import slider2 from '../../../../assets/assets/home/slide2.jpg'
import slider3 from '../../../../assets/assets/home/slide3.jpg'
import slider4 from '../../../../assets/assets/home/slide4.jpg'
import slider5 from '../../../../assets/assets/home/slide5.jpg'
import SectionTitle from '../../../../components/sectiontitle/SectionTitle';

const FoodCategory = () => {
    return (
        <div className='max-w-7xl mx-auto my-8'>
            <SectionTitle
                subHeading={'from 11:00am to 8:00pm'}
                heading={'ONLINE ORDERS'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide className='relative'>
                    <img className='lg:w-full lg:h-96' src={slider1} alt="" />
                    <div className='absolute hover:bg-gray-600 hover:bg-opacity-60 top-0 w-full h-full'></div>
                    <h3 className='text-xl font-semibold text-center absolute bottom-10 translate-x-28 text-white '>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:w-full lg:h-96' src={slider2} alt="" />
                    <div className='absolute hover:bg-gray-600 hover:bg-opacity-60 top-0 w-full h-full'></div>
                    <h3 className='text-xl font-semibold text-center absolute bottom-10 translate-x-28 text-white '>PIZZA</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:w-full lg:h-96' src={slider3} alt="" />
                    <div className='absolute hover:bg-gray-600 hover:bg-opacity-60 top-0 w-full h-full'></div>
                    <h3 className='text-xl font-semibold text-center absolute bottom-10 translate-x-28 text-white '>SOUP</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:w-full lg:h-96' src={slider4} alt="" />
                    <div className='absolute hover:bg-gray-600 hover:bg-opacity-60 top-0 w-full h-full'></div>
                    <h3 className='text-xl font-semibold text-center absolute bottom-10 translate-x-28 text-white '>DESERT</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:w-full lg:h-96' src={slider5} alt="" />
                    <div className='absolute hover:bg-gray-600 hover:bg-opacity-60 top-0 w-full h-full'></div>
                    <h3 className='text-xl font-semibold text-center absolute bottom-10 translate-x-24 text-white '>VEGAN</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCategory;