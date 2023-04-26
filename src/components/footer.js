import"./footerstyle.css";
const footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Yathri</h1>
                    <p>Chose your favorite destination...</p>
                </div>
            </div>
            <div >
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>

            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Change log</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                    
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Trouble shooting</a>
                    <a href="/">Contact us</a>
                    
                </div>
            </div>

            </div>
        
    )
}
export default footer;
