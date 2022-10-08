import { Fragment } from 'react';
import { useHistory,useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuote=(quotes,ascending)=>{
  return quotes.sort((A,B)=>{
    if(ascending){
      return A.id > B.id ? 1:-1;
    }else{
      return A.id < B.id ? 1:-1
    }
  })

}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const isSortingAscending = queryParam.get('sort') === 'asc';

  const sortedQuotes = sortQuote(props.quotes,isSortingAscending);
  const sortHandler = () =>{
    history.push({
      pathname:location.pathname,
      search:`?sort=${(isSortingAscending?'desc':'asc')}`
    })
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
         <button onClick={sortHandler}>Sorting {isSortingAscending?'Decending':'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
