
import moment from 'moment';
import logo from '../assets/logo/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <figure><img className='w-20 h-20' src={logo} alt="" /></figure>
                <p>ABC NEWS Ltd. since 1992</p>
                <p>Copyright © {moment().format("dddd, Do MMMM  YYYY, h:mm:ss a")} - All right reserved</p>
            </aside> 
            <nav>
                <header className="footer-title">Services</header> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
                    
        </div>
    );
};

export default Footer;