
import { Outlet, useLocation} from 'react-router-dom';
import Footer from '../page/Shared/Footer/Footer';
import NavBar from '../page/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname ===('*') 
    
    return (
        <div>
            {!noHeaderFooter && <NavBar></NavBar>}
            
            <Outlet></Outlet>
            
            {!noHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;