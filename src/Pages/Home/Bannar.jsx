
import { Link } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle';
import './Bannar.css'

const Bannar = () => {
    return (
        <div className='my-16'>
            <SectionTitle heading={'Bannar page'} subHeading={'the famous online news websites'}>

            </SectionTitle>
            <div className="bannar my-12 lg:p-40 p-5 bg-fixed">
            <div className='flex flex-col rounded-lg shadow-lg items-center space-y-4 p-5 lg:p-10 bg-white'>
                <h1 className='lg:text-5xl text-3xl text-center pt-20 font-bold uppercase'>THE ABC NEWS</h1>
                <i><p className=' text-center text-success px-5 lg:px-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p></i>
            
                <div className='flex justify-center'>
                <Link><button className='btn btn-outline btn-secondary border-0 border-b-4 text-xl lg:text-3xl'>More Details</button></Link>
            </div>
            </div> 
          
        </div>    
        </div>
       
      
    );
};

export default Bannar;