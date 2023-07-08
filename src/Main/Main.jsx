import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navebr />
            <div className='mx-auto min-h-[calc(100vh-150px)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;