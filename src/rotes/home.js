import Hero from '../components/Hero';
import NAvbar from '../components/NAvbar';
//import NAvbar from '../components/NAvbar';
import Destination from '../components/destination';
import Footer from'../components/footer';


function home(){
    return( 
        <>
        <NAvbar/>
         <Hero
              cname="hero"
              HerpImg="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/How-to-make-a-GIF-in-Photoshop-with-video-Blue-Beach-.gif "
            title="Let explore the world.."
             text="Chose your Favorit desinaion"
             buttonText="Travel Plan"
             url="/"
             btnclass ="show" 
             />
             <Footer/>
        </>
    )
}
export default home;