import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ img, coverTitle, coverText }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[400px] lg:h-[700px]">
                <div className="hero-content text-center lg:w-[1280px] lg:h-[400px] bg-black bg-opacity-50">
                    <div className=" text-white">
                        <h1 className="mb-3 lg:mb-5 text-5xl font-bold">{coverTitle}</h1>
                        <p className="mb-5 max-w-3xl">{coverText}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};
Cover.propTypes = {
    img: PropTypes.string,
    coverTitle: PropTypes.string,
    coverText: PropTypes.string
};

export default Cover;