import { Link } from "react-router-dom";


function HomePage() {

    return(

    <>
   
    
    <Link to={'/beers'} className="link-home">

            <img className='img-home' src="https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={1000}/>
            <h2 className="text-home">ALL BEERS</h2>
            
    </Link>

    <Link to={'/random-beer'} className="link-home">

            <h2 className="text-home">RANDOM BEER</h2>
            <img className='img-home'src="https://images.pexels.com/photos/2599245/pexels-photo-2599245.jpeg" alt="" width={1000}/>
    
    </Link>

    <Link to={'/new-beer'} className="link-home">
        
            <img className='img-home'src="https://images.pexels.com/photos/1932514/pexels-photo-1932514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={1000}/>
            <h2 className="text-home">NEW BEER</h2>

    </Link>
    
    
    
    
    </>
        


    )

   
}

export default HomePage;
