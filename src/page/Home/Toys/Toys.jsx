import { useEffect, useState } from 'react';
import Order from '../Order/Order';

const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])
    console.log(toys)

    return (
        <div>

            {/* {
                toys.map(toy => <Order
                    key={toy.id}
                    toy={toy}
                > </Order>)
            } */}

            <Order></Order>


        </div>
    );
};

export default Toys;