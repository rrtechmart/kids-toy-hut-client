
import ToyCard from './ToyCard';

const OrderTab = ({items}) => {
    
    return (
        <div className='grid grid-cols-3 gap-8 mx-auto'>
            {
                items.map(item =><ToyCard
                key={item.id}
                item={item}
                ></ToyCard>)
            }

        </div>
    );
};

export default OrderTab;