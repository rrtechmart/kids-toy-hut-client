import { Link } from 'react-router-dom';
import notFImg from '../assets/image/not found/error.jpg'

const NotFound = () => {
    return (
        <div className='text-center mb-6'>
            <img className='mx-auto h-1/3 w-1/3' src={notFImg} alt="" />

            <Link to='/'> <button className="btn btn-primary">Back to Home</button> </Link>
            
        </div>

        
    );
};

export default NotFound;