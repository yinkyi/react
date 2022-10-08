import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
const useHttp = () =>{
    const dispatch = useDispatch();
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = async (requestedConfig,applyMethod) => {
      setIsLoading(true);
      setError(null);
      dispatch(uiActions.showNotification({
          status:'pending',
          title:'Sending...',
          message:'Sending cart data!'
      }))
      try {
        const response = await fetch(
            requestedConfig.url,
            {
                method: requestedConfig.method?requestedConfig.method:"GET",
                body: requestedConfig.body?JSON.stringify(requestedConfig.body):null,
                headers: requestedConfig.headers?requestedConfig.headers:{}
            }
        );

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();
        applyMethod(data);
      } catch (err) {
        dispatch(uiActions.showNotification({
            status:'error',
            title:'error!',
            message:err.message || 'Something went wrong!'
          }))
        setError(err.message || 'Something went wrong!');
      }
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!',
        message:'Send cart data successfully!'
      }))
      setIsLoading(false);
    };
    return {
        isLoading:isLoading,
        error:error,
        sendRequest:sendRequest

    }
}
export default useHttp;