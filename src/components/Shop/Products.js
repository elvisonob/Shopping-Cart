import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 7.5,
    title: 'London Tour guide',
    description: 'Best book for London tourist',
  },
  {
    id: 'p2',
    price: 5.35,
    title: 'French Tour guide',
    description: 'Best book for tourist',
  },
  {
    id: 'p3',
    price: 4.22,
    title: 'Italy Tour guide',
    description: 'Best book for London tourist',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
