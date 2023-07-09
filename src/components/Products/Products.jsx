import Product from "./Product"
import { useSelector } from "react-redux"
// import HeadsetProduct from "./HeadSetProduct"

const Products = () => {
    const { products } = useSelector(state => state.cart)
    // const { headPhoneList } = useSelector(state => state.head)

  return (
    <>
      <div className='production-section'>
          <h1 className="text-xl font-bold pt-6">Deals Of The Day</h1>
          <ul className='product-container'>
              {products.map((product) => <Product product= {product} key={product.id} />)}
          </ul>
      </div>

      {/* <div className='production-section pad'>
        <h1 className="text-xl font-bold pt-6">All Products</h1>
        <ul className='product-container'>
          {headPhoneList.map((product)=> <HeadsetProduct product= {product} key={product.id} />)}
        </ul>
      </div> */}
  </>
  )
}

export default Products
