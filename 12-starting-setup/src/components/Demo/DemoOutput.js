import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput =props=>{
    console.log("DemoOutput is Running");
    return <MyParagraph>{props.show && "This is Paragraph"}</MyParagraph>
}
export default React.memo(DemoOutput)