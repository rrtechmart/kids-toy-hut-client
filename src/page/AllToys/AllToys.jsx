import { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import { Helmet } from 'react-helmet-async';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetch('https://kids-toy-market-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    const handleDelete = id => {
        const proceed = confirm('Are you confirm to delete it?');
        if (proceed) {
            fetch(`https://kids-toy-market-server.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted')

                        const remaining = allToys.filter(toys => toys._id !== id)
                        setAllToys(remaining);
                    }
                })
        }

    }

    return (
        <div>
            <Helmet>
                <title> Kids Toy Hut | AllToys</title>
            </Helmet>

            <h2 className='text-7xl font-bold text-center my-10'>All toys </h2>

            {/* <Apply Search option */}
            <form method='GET' className='mb-10'>
                <input onChange={(e)=> setSearch(e.target.value)} type="text" name="search" placeholder="Enter what you want to search" className="input input-bordered input-primary w-full md:max-w-2xl" />
            </form>

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
                            <th>Details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.filter((toy)=>{
                                return search.toLowerCase() === '' ? toy : toy.toyName.toLowerCase().includes(search)
                            }).map(toy => <AllToysRow
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