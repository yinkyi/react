import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = ()=>{
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'Sending cart data!'
        }));
        
        const fetchRequest= async()=>{
            const response = await fetch(
                "https://react-http-a9465-default-rtdb.firebaseio.com/cart.json",
               
            );
            if (!response.ok) {
              throw new Error('Request failed!');
            }
            const data = await response.json();
            return data;
        };
        try{
            const fetchData=await fetchRequest();
            dispatch(cartActions.replaceCart({
                items:fetchData.items||[],
                totalQty:fetchData.totalQty
            }));
            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message:'Send cart data successfully!'
              }))
        }catch(error){
                    dispatch(uiActions.showNotification({
                        status:'error',
                        title:'error...',
                        message:'error!'
                        
                }))
            }
        
    }

};

export const sendCartData = (cart)=>{
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'Sending cart data!'
        }));
        
        const sendRequest= async()=>{
            const response = await fetch(
                "https://react-http-a9465-default-rtdb.firebaseio.com/cart.json",
               { 
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    items:cart.items,
                    totalQty:cart.totalQty
                }) 
                 }
            );
            if (!response.ok) {
              throw new Error('Request failed!');
            }
        };
        try{
            await sendRequest();
            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message:'Send cart data successfully!'
              }))
        }catch(error){
                    dispatch(uiActions.showNotification({
                        status:'error',
                        title:'error...',
                        message:'error!'
                        
                }))
            }
        
    }

};