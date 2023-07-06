import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/myToys?email=${user?.email}`;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [url])

    const handleDelete = id => {
        const proceed = confirm("Are you want to delete it ")
        if (proceed) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert("Successfully deleted")

                        const remaining = myToys.filter(toys => toys._id !== id)
                        setMyToys(remaining)

                    }
                })
        }
    }

    return (
        <div>
            <h2>This is my toys only </h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th> Description </th>
                            <th>Update </th>
                            <th>Delete </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }




                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default MyToys;