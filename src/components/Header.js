import { Link } from "react-router-dom";
import '../styles.scss'

function Header(props) {
  return (
    <div className='top'>
            <div className="topleft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className='toplistitem'>
                        <Link className='link' to='/'> HOME</Link> </li>
                    <li className='toplistitem' >
                        <Link className='link' to='/about'> ABOUT</Link> </li>
                    <li className='toplistitem'>
                        <Link className='link' to='/contact'> CONTACT</Link> </li>
                    <li className='toplistitem'>
                        <Link className='link' to='/write'> WRTIE</Link> </li>
                    
                </ul>
            </div>
            <div className="topright">

                    <ul className='toplist'>
                        <li className="toplistitem">
                        <Link className='link' to='/register'>REGISTER</Link>
                        </li>
                        <li className="toplistitem">
                        <Link className='link' to='/login'>LOGIN</Link>
                        </li>
                    </ul>
               
                <i className="topsearch fas fa-search"></i>
            </div >
        </div >
  );
}

export default Header;