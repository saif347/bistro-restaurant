import PropTypes from 'prop-types';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <h4 className='italic text-yellow-400 text-center'>--{subHeading}--</h4>
            <div className='flex justify-center'>
                <h3 className='text-2xl font-semibold py-2 px-5 border-y-2 inline-flex mb-5 uppercase'>{heading}</h3>
            </div>

        </div>
    );
};

SectionTitle.propTypes={
    subHeading:PropTypes.string,
    heading: PropTypes.string
}

export default SectionTitle;