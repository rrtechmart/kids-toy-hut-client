
import { useLoaderData } from "react-router-dom";


const UpdateMyToy = () => {
    const toy = useLoaderData([]);
    const {_id, name, price, quantity, details } = toy;
    console.log(toy)

    

    // const url =`https://kids-toy-market-server.vercel.app/myToys?email=${user?.email}`;
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res =>res.json())
    //     .then(data => setMyToys(data))

    // } ,[])



    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;      
               
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updateToy = {
            name,
            price,           
            quantity,
            details,
           
            
        }
        // console.log(updateToy);


        fetch(`https://kids-toy-market-server.vercel.app/singleToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount >0) {
                    alert("Toy has updated successfully")
                }

            })



    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <form onSubmit={handleUpdateToy}>
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">


                            <div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='price' defaultValue={name} placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity </span>
                                    </label>
                                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail Description</span>
                                    </label>
                                    <input type="text" name='details' defaultValue={details} placeholder="Detail Description" className="input input-bordered" />
                                </div>

                                <div className="form-control w-96 ml-8 mt-6">
                                    <input className="btn btn-primary" type="submit" value="Update"/>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyToy;