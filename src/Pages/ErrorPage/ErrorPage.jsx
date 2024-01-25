
import { Link } from 'react-router-dom';
import logo from '../../assets/error/error.jpg'
const ErrorPage = () => {
    
    return (
        <div className=''>
            <div className='flex justify-center my-20'>
             <img src={logo} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to={'/'}><button className='btn btn-lg btn-warning  text-3xl'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;