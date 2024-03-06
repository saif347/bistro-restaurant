import chefService from '../../../../assets/assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="my-24 max-w-7xl mx-auto relative p-1">
            <img src={chefService} alt="" />
            <div className='lg:text-center max-w-6xl mx-auto lg:h-60 p-1 lg:p-5 bg-white lg:absolute lg:top-1/4 lg:left-16 flex justify-center items-center'>
                <div>
                    <h3 className='text-lg lg:text-3xl '>Bistro Boss</h3>
                    <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in iure deleniti enim quae voluptatibus minus officia qui et voluptate. Ipsum exercitationem iusto sed ut cumque dicta voluptates soluta explicabo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, perferendis ut. Quibusdam provident, eos repellendus molestiae voluptatem veniam amet illum! a in.</p>
                </div>
            </div>

        </div>
    );
};

export default BistroBoss;