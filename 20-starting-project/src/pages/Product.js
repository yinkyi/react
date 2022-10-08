import { Link } from "react-router-dom";

const Product = ()=>{
    return(
        <section>
            <h1>Product</h1>
            <ul>
                <li><Link to="product-detail/P1">Product 1</Link></li>
                <li><Link to="product-detail/P2">Product 2</Link></li>
                <li><Link to="product-detail/P3">Product 3</Link></li>
            </ul>
        </section>
    )
}

export default Product;