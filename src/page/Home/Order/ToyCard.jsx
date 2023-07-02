import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import commonImg from '../../../assets/image/category/c-2.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

const ToyCard = ({item}) => {
    const {name, image, price, rating}=item;
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/login';

    const hadleViewDetails = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Attention Please',
            text: 'You have to login first to view details!',
            
          })
          navigate(from, {replace:true})
    }
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image ? item.image : <span> <img src={commonImg} alt="" /></span> } alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name} </h2>
                    <p> Price: ${price} </p>
                    <p> Rating: {rating ? item.rating : <span>110</span> } </p>

                    <div className="card-actions justify-end">
                        <button onClick={hadleViewDetails} className="btn btn-primary">View Details </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyCard;