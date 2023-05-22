import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    // const allToys = useLoaderData([])
    // const {image, price, name}= allToys;
    // console.log(allToys);   

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const handleDelete = id =>{
        const proceed = confirm('Are you confirm to delete it?');
        if(proceed){
            fetch(`http://localhost:5000/toys/${id}`, {
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount >0){
                    alert('Successfully deleted')

                    const remaining = allToys.filter(booking => booking._id !== id)
                    setAllToys(remaining);
                }
            })
        }

    }

    return (
        <div>
            <h2 className='text-7xl font-bold text-center my-10'>All toys </h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <AllToysRow
                                 key={toy._id}
                                 toy={toy}
                                 handleDelete={handleDelete}
                                 ></AllToysRow>)
                        }
                        
                       

                       
                    </tbody>

                    

                </table>
            </div>

        </div>
    );
};

export default AllToys;