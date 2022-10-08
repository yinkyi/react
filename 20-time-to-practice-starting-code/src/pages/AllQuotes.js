import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuoteFound from "../components/quotes/NoQuotesFound";
// const DUMMY_QUOTES = [
//   {id:'q1',author:'Max',text:'Learning React is fun'},
//   {id:'q2',author:'Maximilian',text:'Learning React is great'},
// ];
let DUMMY_QUOTES = [];
const AllQuotes = () => {
  const {sendRequest,data:loadedQuotes,status,error}=useHttp(getAllQuotes,true);

    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if(status === "pending"){
      return (
        <div className="centered">
          <LoadingSpinner/>
        </div>
      )
    }
    if(error){
      return <p className="centered focused">{error}</p>
    }


    if(status === "completed" &&  loadedQuotes.length < 1){
      return <NoQuoteFound></NoQuoteFound>

    }
    return <QuoteList quotes={loadedQuotes}/>
  };
  
  export default AllQuotes;