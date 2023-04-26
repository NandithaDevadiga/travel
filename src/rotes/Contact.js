
import Hero from '../components/Hero';
import Navbar from '../components/NAvbar';
import Contactform from '../components/contactform';
import Footer from '../components/footer';
    function Contact(){
        return(
            <>
            <Navbar/>
            <Hero
              cname=".hero-mid"
             // HerpImg=" https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="
                
                     />
                     <h1><b><i>Contact Us</i></b></h1>
                     <Contactform/>
                     <Footer/>

        </>
            
        
        )
    
    }
    export default Contact;