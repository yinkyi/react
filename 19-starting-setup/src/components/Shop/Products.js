import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[
  {
    id:'p1',
    price:6,
    title:'My first book',
    description:'The first book I ever wrote'
  },
  {
    id:'p2',
    price:8,
    title:'My second book',
    description:'The second book I ever wrote'
  },
  {
    id:'p3',
    price:10,
    title:'My third book',
    description:'The third book I ever wrote'
  }
]
const productList=DUMMY_PRODUCT.map(product=>{
  return  <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}/>
})
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;