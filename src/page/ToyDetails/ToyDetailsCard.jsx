

const ToyDetailsCard = ({ toyDetail }) => {
    const { image, toyName, price, rating, quantity } = toyDetail
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p> Price: {price} </p>
                <p>Rating: {toyDetail ?.rating} </p>
                <p> Available Quantity: {quantity} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsCard;