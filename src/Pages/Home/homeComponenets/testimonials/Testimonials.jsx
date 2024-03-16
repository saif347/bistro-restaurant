import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setTestimonials(data))
    }, [])
    console.log(testimonials)
    return (
        <section className="my-16 max-w-7xl mx-auto">
            <SectionTitle subHeading={'what Our Clients say'} heading={'Testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    testimonials.map(review => <SwiperSlide
                        key={review._id}>
                        <div className=" flex flex-col items-center justify-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <span className="flex justify-center text-5xl my-5"><FaQuoteLeft /></span>
                            <p>{review.details}</p>
                            <h3 className="text-3xl font-medium text-amber-600 text-center">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;