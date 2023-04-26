import'./Herostyle.css';
function Hero(props){
    return(

        <>
        <div className={props.cname}>
        </div>

        <div className='hero'> 
        <img alt="HerpImg" src={props.HerpImg} />
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text} </p>
             <a href={props.url} className={props.btnclass}>
               {props.buttonText}
            </a>
        </div>
        </div>
        </>
    );
}
export default Hero;
