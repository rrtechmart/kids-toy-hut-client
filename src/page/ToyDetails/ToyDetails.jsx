import { useLoaderData } from "react-router-dom";



const ToyDetails = () => {
    const toyDetails = useLoaderData()
    
    const {toyURL, toyName, sellerName, price, quantity, rating, details, email} = toyDetails;
    return (
        <div>
            <h2 className="text-3xl font-semibold my-8"> The toy details that you have posted is as follows .</h2>
            <div className="card w-96 bg-base-100 shadow-xl mb-6 m-auto">
                <figure><img src={toyURL} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p> Seller: {sellerName} </p>
                    <p> Email: {email} </p>
                    <p> Price: {price} </p>
                    <p> Rating: {rating} </p>
                    <p> Available Quantity: {quantity} </p>
                    <p> Description: {details} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ToyDetails;