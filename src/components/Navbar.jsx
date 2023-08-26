import { Link } from "react-router-dom";
import home from "../assets/home-1.svg"

function Navbar() {

   
    return(
        <nav className="home-logo-bg">
            <Link to={'/'}>
                <img className="home-logo" src={home} alt="" width={25}/>
            </Link>
        </nav>
       
    )
}

export default Navbar;
