


import slide1 from  '../../assets/publisher/newyourk.jpg'
import slide2 from '../../assets/publisher/dailymail.jpg'
import slide3 from '../../assets/publisher/bbc.jpg'
import slide4 from '../../assets/publisher/cnn.jpg'
import slide5 from '../../assets/publisher/fox.jpg'
import slide6 from '../../assets/publisher/routers.png'
import SectionTitle from '../../Components/SectionTitle';
import Marquee from 'react-fast-marquee';


const Publisher = () => {
    return (
        <section className='my-12'>
          
            <div className=' p-5 bg-white  shadow-2xl'>
                    <SectionTitle  heading={'publisher'} subHeading={'the wolrd best'}>
                    
                    </SectionTitle>
                <Marquee speed={150}>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide1} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>THe New Yourk Times</h1>
                    </div>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide2} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>The Daily Mail</h1>
                    </div>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide3} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>BBC NEWS</h1>
                    </div>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide4} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>CNN News</h1>
                    </div>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide5} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>THe FOX</h1>
                    </div>
                    <div className='mx-5 border-8 shadow-2xl border-green-600'>
                        <img className='h-80 w-full' src={slide6} alt="" />
                        <h1 className='text-3xl font-Cinzel font-bold text-center text-orange-500'>THe Reuters</h1>
                    </div>
                    
                </Marquee>
            </div>
        </section>
    );
};

export default Publisher;