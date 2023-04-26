import { Component } from 'react';
import './desination style.css';
import Pic1 from"./assets/hampi-karnataka.jpg";
import Pic2 from'./assets/online food pic.jpg';
import  Pic3 from './assets/anu123.jpg';



class DestinationData extends Component{
    render(){
    return(
        <div className='first-pic'>
            <div className="des-text">
                <h2> {this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
<div className="Image">
    <img alt=""  src={this.props.img1}/>
     <img alt='' src={this.props.img2}/>
     <video alt='' src={this.props.v1}/>
</div>
  </div>
        





    )
    }
} 
export default DestinationData;