import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
 const Dummy_Data =[
    {
      id:1 ,price:6, title:'my best ever books',description:"first book i ver have learned"
    },
    {
      id:2 ,price:8, title:'my second best ever books',description:"second book i ver have learned"
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Data.map((product)=>(
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
