import React, { useMemo } from "react";


const DemoList = props =>{
    console.log("DemoList is Running");
    const {items} = props;
    
    let sortedList= useMemo(()=>{
        console.log("array is sorted")
         return items.sort((a,b)=>a-b);
    },[items]);
       

        return(
            <div>
                <h2>{props.title}</h2>
                <ul>
                    
                        {sortedList.map((item)=>(
                            <li key={item}>{item}</li>
                        ))}
                    
                </ul>
            </div>
        )
}
export default React.memo(DemoList);