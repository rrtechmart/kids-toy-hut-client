import img1 from '../../../assets/image/banner/b1.jpg'
import img2 from '../../../assets/image/banner/b2.jpg'
import img3 from '../../../assets/image/banner/b3.jpg'
import img4 from '../../../assets/image/banner/b4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] my-10">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute flex h-full items-center pl-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/3 space-y-7'>
                        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex h-full items-center pl-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/3 space-y-7'>
                        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />

                <div className="absolute flex h-full items-center pl-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/3 space-y-7'>
                        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />

                <div className="absolute flex h-full items-center pl-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/3 space-y-7'>
                        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;