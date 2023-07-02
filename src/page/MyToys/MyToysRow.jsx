import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ mayToy }) => {
    // console.log(mayToy);
    const { toyName, price, sellerName, _id, quantity, details} = mayToy
    return (
        <tr>

            <td>{sellerName} </td>
            <td>{toyName} </td>
            <td>{price}</td>
            <td> {quantity} </td>
            <td> {details} </td>

            <th>
                <Link to={`/updateMyToys/${_id}`} className="btn btn-primary btn-xs"> Update </Link>
            </th>

            {/* <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th> */}
        </tr>
    );
};

export default MyToysRow;