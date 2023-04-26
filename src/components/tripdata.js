import './tripstyle.css';
//import Trip from './trip';
 function TripData(props){
    return(<>
    
        <div name="t-card">
            <div className='t-image'>
             <img src= {props.pics} alt=""/>

            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            
        </div>
        </>
       
    )
}
export default TripData;