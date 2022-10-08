import React from "react";

const MyParagraph =props=>{
    console.log("MyParagraph is Running");
    return <p>{props.children}</p>
}
export default MyParagraph