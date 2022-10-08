import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useParams, Route,useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";
// const DUMMY_QUOTES = [
//   {id:'q1',author:'Max',text:'Learning React is fun'},
//   {id:'q2',author:'Maximilian',text:'Learning React is great'},
// ];

const QuoteDetail = () => {
  const {sendRequest,status,error,data:quote}=useHttp(getSingleQuote,true);

  const params = useParams();
  const match = useRouteMatch();
  // const quote = DUMMY_QUOTES.find(quote=>quote.id === params.quoteId);
  useEffect(()=>{
    sendRequest(params.quoteId);
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
  if(!quote){
    return <p>No quote found!</p>
  }
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={match.path} exact>
        <div className='centered'>
            <Link className='btn--flat' to={`${match.url}/comments`}>Loading...</Link>
        </div>
      </Route>
      
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;