import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import commonImg from '../../../assets/image/category/c-2.jpg';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const ToyCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { _id, toyName, toyURL, price, rating } = item;
       

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Attention Please',
                text: 'You have to login first to view details!',

            })
            
        }
        return <Navigate to="/login" replace={true} />

        
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px]' src={toyURL ? item.toyURL : <span> <img src={commonImg} alt="" /></span>} alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toyName} </h2>
                    <p> Price: ${price} </p>
                    <p> Rating: {rating ? item.rating : <span>110</span>} </p>

                    <div className="card-actions justify-end">
                        <Link to={`/singleToy/${_id}`}>
                            <button onClick={handleViewDetails}  className="btn btn-primary">View Details </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyCard;