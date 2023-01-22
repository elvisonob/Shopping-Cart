import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/index.js';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.cart2.totalQuantity);
  const toggleHandler = () => dispatch(cartAction.showCart());
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
