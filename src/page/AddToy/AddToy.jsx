

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toy = {
            toyURL: url,
            toyName,
            price,
            subCategory,
            quantity,
            rating,
            details,
            sellerName: sellerName,
            email,
        }
        console.log(toy);


        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Toy post has done successfully")
                }

            })



    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <form onSubmit={handleAddToy}>
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name='url' placeholder="Picture URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                            </div>

                            {/* second column */}
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <input type="text" name='subCategory' placeholder="sub-Category" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="$ Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity </span>
                                    </label>
                                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                                </div>

                            </div>


                        </div>

                        <div className="form-control w-full mx-auto px-8">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name='details' placeholder="Detail Description" className="input input-bordered" />
                        </div>

                        <div className="form-control w-full mx-auto px-8 mt-6 mb-6">
                            <input className="btn btn-primary" type="submit" value="Add it" />
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;