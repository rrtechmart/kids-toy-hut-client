import { useEffect, useState } from "react";


const UseToy = () => {
    const [toys, setToys]= useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://kids-toy-market-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })

    }, [])
    return [toys, loading]
};

export default UseToy;