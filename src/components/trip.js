import './tripstyle.css';
//import './tripdata';
import TripData from './tripdata';
import trip1 from'./assets/madlive image.jpg';
import trip2 from'./assets/hampi-karnataka.jpg';
import trip3 from'./assets/Tourist-Places-in-Malaysia1.jpg';

function trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can disover unique  destination using Google Maps. </p>
            <div className="trip-card">
                <TripData
                pics={trip1}
                heading="Trip to indonesia"
                text=" Indonesia is the country that
                 has extraordinary natural wealth.
                  In fact, all the world is well-known attractions here.
                   Indonesia has hundreds of National Parks that must to visit. 
                   One of them is the Komodo National Park is the sole habitat of Komodo in the world.
                    In addition, there is also a favorite of international climbers is Carstensz Pyramid 
                    where this mountain was shrouded in eternal snow. 
                    Indeed, the wealth of natural attractions Indonesia countless. 
                    To prove it, please visit Indonesia as recommended tourist destination by 
                    presenting the most complete natural wealth on earth."
                />
                <h3> 3 days @35000</h3>
                




            </div>
        </div>

    

    )
}
export default trip;