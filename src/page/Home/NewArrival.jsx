import na1 from '../../assets/image/new arrival/na-1.png';
import na2 from '../../assets/image/new arrival/na-2.png';
import na3 from '../../assets/image/new arrival/na-3.png';
import na4 from '../../assets/image/new arrival/na-4.png';
import na5 from '../../assets/image/new arrival/na-5.png';
import na6 from '../../assets/image/new arrival/na-6.png';

const NewArrival = () => {
    return (
        <div>
            <div className='bg-blue-700 text-white rounded-lg p-10'>
                <h1 className='text-6xl font-bold mb-6'>New Arrived Car With Limited Stock </h1>
                <p className='text-lg'>
                Introducing our newly arrived car, a marvel of modern engineering and innovation. This exceptional vehicle blends exquisite design with cutting-edge technology, creating an unparalleled driving experience. Its sleek and aerodynamic exterior turns heads, while the luxurious interior provides utmost comfort and advanced connectivity features. Equipped with state-of-the-art safety systems and powerful performance capabilities, this car effortlessly merges power and efficiency. With its intelligent features and intuitive controls, every journey becomes an adventure. Whether you crave exhilarating speed or desire a smooth and refined ride, this newly arrived car is ready to redefine your driving experience and leave an indelible impression on the road.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na1} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na2} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na3} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na4} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na5} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {na6} alt="Shoes" /></figure>
                    <div className="card-body">                        
                        <p>Its newly arrived which is more attractive at this moment</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewArrival;