import AOS from 'aos';
import img1 from '../../../assets/image/gallery/g1.jpg'
import img2 from '../../../assets/image/gallery/g2.jpg'
import img3 from '../../../assets/image/gallery/g3.jpg'
import img4 from '../../../assets/image/gallery/g4.jpg'
import img5 from '../../../assets/image/gallery/g5.jpg'
import img6 from '../../../assets/image/gallery/g6.jpg'

const Gallery = () => {
    AOS.init({
        duration:1200
    })
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Car Gallery</h1>
            <p className='font-semibold text-center'>We provide the the best quality car that you can not emagine yet. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-2'>
                <div data-aos='zoom-in'>
                    <img src={img1} alt="" />
                    <p>Name: Jeep car maroon</p>
                </div>
                <div data-aos='zoom-in'>
                    <img src={img2} alt="" />
                    <p>Name:Racing car</p>
                </div>
                <div data-aos='zoom-in'>
                    <img src={img3} alt="" />
                    <p>Name:Jeep car red</p>
                </div>
                <div data-aos='zoom-in'>
                    <img src={img4} alt="" />
                    <p>Name:Crane </p>
                </div>
                <div data-aos='zoom-in'>
                    <img src={img5} alt="" />
                    <p>Name:Bogati car</p>
                </div>
                <div data-aos='zoom-in'>
                    <img src={img6} alt="" />
                    <p>Name:Racing car</p>
                </div>
            </div>


        </div>
    );
};

export default Gallery;