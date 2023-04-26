// import Pic1 from"./assets/hampi-karnataka.jpg";
// import Pic2 from'./assets/anu123.jpg';
import Pic1 from"./assets/madlive image.jpg";
import Pic2 from'./assets/maleshyacollege.jpg';
import  Pic3 from './assets/sinagapur1.jpg';
import Pic4 from'./assets/UAE3.png';
import Pic5 from'./assets/PARIS.jpg';


import "./desination style.css";
import DestinationData from "./DestinationData";

const destination=()=>{
    return(
        <div className="destination">
        <h1>Best Destination in 2022</h1>
        <p>Tour give opportunity to see a lot .within atime frame </p>
        <DestinationData
           heading="Singapur"
         text=' Best described as a microcosm of modern Asia, Singapore is a melting pot of culture and history, and an extravaganza of culinary delights. Officially known as the Republic of Singapore, it is both a city and a country located in Southeast Asia. One of Asias most visited destinations, Singapore is best described as an amalgam of a 
         fast-paced life and an off-the-back-street inheritance Readmore'
         img1={Pic3}/>
        <h3> Best Offer:7days Tour @35000 </h3>

<h4>------------------------------------------------------------------------------------</h4>
<DestinationData
         heading="Malaysia"
         text=" Malaysia is one of the biggest tourist attractions in the South East Asia and Malaysia tour package is one of the most searched items on the internet. Every year hundreds of thousands of tourists visited and explored this beautiful country. Malaysia truly has some of the fascinating tourist destinations in the world. Malaysia is a place of diversity and so many Malaysia holiday packages for visitors to explore" 
            img1={Pic2}

         />
         <h3> Best Offer:6 days Tour @55000 </h3>
<h4>---------------------------------------------------------------------------------</h4>

<DestinationData

         heading="Maldivs"
         text=" Malaysia is one of the biggest tourist attractions in the South East Asia and Malaysia tour package is one of the most searched items on the internet. Every year hundreds of thousands of tourists visited and explored this beautiful country. Malaysia truly has some of the fascinating tourist destinations in the world. Malaysia is a place of diversity and so many Malaysia holiday packages for visitors to exploreKnown for its tagline 'Truly Asia', Malaysia has long cemented its reputation as one of the world's top tourist destinations. An ecotourism hotspot, the country is home to an estimated 20% of the world's animal species as well as four UNESCO World Heritage Sites.The Petronas Twin Towers in Kuala Lumpur, the 88-floor building is the 21st-century icon for Malaysia.

         Mosques, the country is home to several Muslim places of worship that are prominent landmarks. Famous examples are the Masjid Jamek Mosque and the National Mosque of Malaysia in Kuala Lumpur, the Iron Mosque and the pink Putra Mosque in Putrajaya, the futuristic Cyberjaya Mosque in Selangor, and the state mosque of Selangor, the Blue Mosque in Shah Alam.

         Popular Malaysian dishes like the omelet sandwich Roti john, Penang's Nasi kandar, Rendang from Sumatra, spicy Laksa soup, meat on a stick known as Satay and the classic rice noodle dish Char kway teow.

         Malaysia Truly Asia (the advertising slogan was introduced worldwide in 1999).
         Malaysia's wildlife is famous for big cats, such as tigers and leopards, the Malayan tapir and the endangered Borneo pygmy elephants and Borneo orangutans."
            img1={Pic1}

         />
<DestinationData
         heading="Paris"
         text=" Paris needs no formal introduction - synonymous with culture, architecture, food and fashion. That je ne sais quoi of the French capital makes it the dream destination for many. So would you want to leave Paris 'Before Sunset' or would you take our word and spend a 'Midnight in Paris'?! The mesmerizing wrought-iron spire of the Eiffel Tower piercing the skyline, the Arc de Triomphe guarding the most glamorous avenue, the Champs Elysees, the regal Notre Dame cathedral, lamp lit bridges spanning the Seine and art nouveau cafes spilling onto wicker-chair-lined terraces.

         Best Time: June to Augus"
         img1={Pic5} />
         <DestinationData
         heading="UAE "
         text="Once known for its fishing-based economy, today, UAE is much more than vast deserts and ancient forts. Immersed in its rich Emirati culture, the UAE is one of the most popular tourist destinations in the world offering touches of modernity with its ever-expanding infrastructure. From its traditional souks to palm-shaped islands, glittering huge malls, luxurious hotels, grand architecture and theme parks, the country offers you a complete package to relax, rejuvenate and be adventurous, all at the same time.

         "
          img2={Pic4}/>
        </div>
            );
}
export default destination;