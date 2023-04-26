import { Component } from "react";
import "./navbar.css";
import { menuItem } from "./menuItems";
import { Link} from "react-router-dom";

//import { Link } from "react-router-dom";

class Navbar extends Component{
  state={clicked:false}
  handleclick=()=>{
this.setState({clicked:!this.state.clicked})
  }
    render(){
     return(
      
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Yathri</h1>
        <div className="menu-icon" onClick={this.handleclick}>
          <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul class="nav-menu">

          {menuItem.map((item,index)=>{
            return(
               <li key ={index}>
              <Link className={item.cname} to={item.url}>
              < i className={item.icon}>
                 </i>{item.title}</Link>
            </li>);
          })
          }
          <button>sign Up</button>

        </ul>
      </nav>
    
);
    }
}
export default Navbar;