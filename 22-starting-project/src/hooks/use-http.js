import {useState} from 'react';
const useHttp = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = async (requestedConfig,applyMethod) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
            requestedConfig.url,
            {
                method: requestedConfig.method?requestedConfig.method:"GET",
                body: requestedConfig.body?JSON.stringify(requestedConfig.body):null,
                headers: requestedConfig.headers?requestedConfig.headers:{}
            }
        );
       
        // if (!response.ok) {
        //   throw new Error('Request failed!');
        // }
      
        const data = await response.json();
        if(!response.ok){          
          throw new Error(data && data.error && data.error.message ?data.error.message:'Request failed!');
        }else{
          applyMethod(data);
        }
        
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
    return {
        isLoading:isLoading,
        error:error,
        sendRequest:sendRequest

    }
}
export default useHttp;