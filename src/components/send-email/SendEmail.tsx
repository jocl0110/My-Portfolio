import { useNavigate } from 'react-router-dom';
function SendEmai (){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }
    return (
        <div className="form">
            <label htmlFor="">From:</label>
            <input type="text" placeholder="Jose Izquierdo"/>
            <label>Email:</label>
            <input type="email" placeholder="example@gmail.com"/>
            <label htmlFor="">Subject</label>
            <input type="text"/>

            <textarea placeholder="Type a message">

            </textarea>
            <button onClick={handleClick}>Home</button>
            <button>Reset</button>
            <button>Send</button>
        </div>
    )
}


export default SendEmai