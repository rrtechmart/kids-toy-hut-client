import {useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const {user}=useContext(AuthContext);  
    const [mayToys, setMyToys] = useState([]);

    const url =`http://localhost:5000/myToys?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => setMyToys(data))

    } ,[])
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
                            mayToys.map(mayToy => <MyToysRow
                            key={mayToy._id}
                            mayToy={mayToy}
                            ></MyToysRow>)
                        }
                        
                       

                       
                    </tbody>

                    

                </table>
            </div>

        </div>
    );
};

export default MyToys;