import {Route} from 'react-router-dom'
import Product from './pages/Product';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import { Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
      <MainHeader/>
      <main>
          <Route path="/">
           <Redirect to="/welcome"></Redirect>
          </Route>
         <Route path="/welcome">
           <Welcome></Welcome>
         </Route>
         <Route path="/product">
             <Product></Product>
          </Route>
          <Route path="/product-detail/:productId">
           <ProductDetail></ProductDetail>
        </Route>
      </main>
    
    </div>
  );
}

export default App;
