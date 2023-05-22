

const AllToysRow = ({ toy, handleDelete }) => {
    const { name, price, category, _id, image, quantity, subcategories } = toy;
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                {name}
            </td>
            <td>
                {subcategories}
            </td>
            <td>{price}</td>
            <td> {quantity} </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;