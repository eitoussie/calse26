import { useState } from "react";
import "./colorPicker.css"

const Picker = () => {
    const [color, setColor] = useState("")

    return (  
        <div className="input" style={{backgroundColor:color}}>
            <h2> Color picker</h2>
        <input type ="color" onChange={(e) => setColor(e.target.value)}/>
        <input type="text" value = {color}></input>
        </div>
    );
}
 
export default Picker;