import { useParams } from "react-router-dom";
const ProductDetail = () =>{
    const param = useParams();
  return (
      <section>
          <h1>Product Detail</h1>
          {param.productId}
      </section>
  )
}
export default ProductDetail;