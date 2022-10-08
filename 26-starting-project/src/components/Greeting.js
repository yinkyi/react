import { useState } from "react";
import Output from "./Output";
const Greeting = ()=>{
    const [changeText,setChangeText] = useState(false);

    const changeTextHandler=()=>{debugger;
        setChangeText(true);
    }
    return(
        <div>
            <h1>Hello World</h1>
            {!changeText && <Output>Nice To Meet You</Output>}
            {changeText && <Output>Changed!</Output>}
            <button type="button" onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}
export default Greeting;