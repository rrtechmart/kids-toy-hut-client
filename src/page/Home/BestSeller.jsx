import bs1 from '../../assets/image/best seller/bs-1.png'
import bs2 from '../../assets/image/best seller/bs-2.png'
import bs3 from '../../assets/image/best seller/bs-3.png'
import bs4 from '../../assets/image/best seller/bs-4.png'
import bs5 from '../../assets/image/best seller/bs-5.png'
import bs6 from '../../assets/image/best seller/bs-6.png'

const BestSeller = () => {
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={bs1} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">X</h2>
                    <p>A pinnacle of luxury and performance, Car X combines elegant design with cutting-edge technology, delivering a driving experience like no other.</p>
                    
                </div>
            </div>
            
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={bs1} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">X</h2>
                    <p>A pinnacle of luxury and performance, Car X combines elegant design with cutting-edge technology, delivering a driving experience like no other.</p>
                    
                </div>
            </div>


        </div>
    );
};

export default BestSeller;