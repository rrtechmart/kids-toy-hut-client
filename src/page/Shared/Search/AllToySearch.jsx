

const AllToySearch = () => {

   

    return (
        <form method='GET' className='mb-10'>
            
            <input type="text" name="search" placeholder="Enter what you want to search" className="input input-bordered input-primary w-full md:max-w-2xl" />
            <button className="btn btn-outline btn-primary" type="submit">Search</button>
            
        </form>
    );
};

export default AllToySearch;