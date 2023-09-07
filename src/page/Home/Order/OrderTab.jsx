import { motion } from "framer-motion";
import ToyCard from './ToyCard';

const OrderTab = ({items}) => {
    
    return (
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
         transition={{delay:.5, ease: "easeOut", duration: 1}} className='grid md:grid-cols-3 gap-8 mx-auto pt-14 md:pt-10'>
            {
                items.map(item =><ToyCard
                key={item._id}
                item={item}
                ></ToyCard>)
            }

        </motion.div>
    );
};

export default OrderTab;