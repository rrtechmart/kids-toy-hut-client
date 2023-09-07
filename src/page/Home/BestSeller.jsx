import AOS from "aos";
import bs1 from '../../assets/image/best seller/bs-1.png'
import bs2 from '../../assets/image/best seller/bs-2.png'
import bs3 from '../../assets/image/best seller/bs-3.png'
import bs4 from '../../assets/image/best seller/bs-4.png'
import bs5 from '../../assets/image/best seller/bs-5.png'
import bs6 from '../../assets/image/best seller/bs-6.png'


const BestSeller = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <div className='bg-red-100 p-10 rounded-lg mb-10'>

            <div>
                <h1 data-aos='fade-right' className='text-6xl font-bold'>Best Seller Cars</h1>
                <p>
                    In the past year, our shop experienced tremendous success with six standout . Each car possesses its own unique allure. Car Avenga offers a perfect blend of luxury and performance, while Car Y turns heads with its sleek design. Lamborgine impresses with its spaciousness and versatility, while Car A stands out as a fuel-efficient option. Car B boasts rugged power, and Car C embraces sustainability with its electric prowess.
                </p>
            </div>

            <div className='grid md:grid-cols-2 md:gap-10 px-4 py-10'>
                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl mb-2">
                    <figure><img src={bs1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">  Blue Mustang</h2>
                        <p>A pinnacle of luxury and performance, Car X combines elegant design with cutting-edge technology, delivering a driving experience like no other.</p>

                    </div>
                </div>

                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl mb-2">
                    <figure><img src={bs2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Green Traveler</h2>
                        <p>With its sleek and captivating design, Car Y commands attention wherever it goes, blending style and performance seamlessly.</p>

                    </div>
                </div>
                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl mb-2">
                    <figure><img src={bs3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Lamborghini </h2>
                        <p>Offering spaciousness and versatility, Car Z is perfect for families and adventure seekers, providing ample room and functionality without compromising on comfort.</p>

                    </div>
                </div>
                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl mb-2">
                    <figure><img src={bs4} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Red Aventador </h2>
                        <p>Car A is an impressive fuel-efficient option, delivering excellent mileage and eco-conscious features without sacrificing power or driving pleasure.</p>

                    </div>
                </div>
                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl mb-2">
                    <figure><img src={bs5} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Avenga </h2>
                        <p>Built to conquer any terrain, Car B embodies rugged power and durability, making it the ideal choice for off-road enthusiasts and demanding tasks.</p>

                    </div>
                </div>
                <div data-aos='zoom-in' className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={bs6} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Mercedes </h2>
                        <p>Embracing sustainability, Car C showcases the future of transportation with its electric capabilities, delivering eco-friendly driving without compromising style or performance.</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default BestSeller;