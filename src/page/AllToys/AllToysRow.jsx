import { Link } from "react-router-dom";


const AllToysRow = ({ toy, handleDelete}) => {
    // console.log(toy);
    const { toyName, price, sellerName, _id, quantity, subCategory } = toy;
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>{sellerName} </td>
            <td>{toyName} </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td> {quantity} </td>

            <th>                
                <Link to={`/singleToy/${_id}`} className="btn btn-ghost btn-xs"> Details </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;