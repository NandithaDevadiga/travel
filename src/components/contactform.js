import './contactform.css';
function Contactform(){
    return(
        <div className='form-container'>
            <h1>Send a messege to us</h1>
            <form>

            <input placeholder='name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message' rows="4"/>
            <button>Send</button>
            </form>
        </div>
    )
}
export default Contactform;