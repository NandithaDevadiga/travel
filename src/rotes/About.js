
    import Hero from '../components/Hero';
    import Footer from '../components/footer';
    
    
    import Navbar from '../components/NAvbar';
//import Temp from'../components/aboutus.js';

    function About(){
        return(
            <>
<Navbar/>
         <Hero
              cname=".hero-mid"/>

                         <h1>AboutUs</h1>
            <p>
            Yathri  is owned and  maneged by Yathri.In Pvt.Ltd.  </p>

            <h1>Our Mission</h1>
            <p>
            Tour guides work in the travel industry, giving guided tours 
            to groups of visitors. They are experts on the history of the location they are in,
             and offer their tour groups interesting or enlightening information about hist
             orical sites, museums, scenic locations, nature attractions, and other travel destinations.
             Our Mission is to perform and deliver excellent quality service to our 
             clients. Providing them unforgettable travel, enjoyable, with guaranteed 
             services that exceed their expectations With this objective, we aim to
              earn the reputation as "Your Preferred Travel Agency". The satisfaction 
              of our customers and extraordinary service is the main aim, saving your 
              time and money while providing the best value for your trip. </p>

            <h1>Our Vission</h1>
 <p>
     Vision: Statement Our vision is to be innovators, leaders and creative in the concepts of travel
     positioning our company in the market within the best tourism companies in Egypt
     being recognized for our professionalism and high quality products. </p>
   

    

<Footer/>
        </>

        );
    }
    export default About;