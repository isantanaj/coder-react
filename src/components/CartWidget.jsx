import cart from '../assets/cart-shopping-svgrepo-com.svg';
export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" width={20} />
      <span>2</span>
    </>
  );
};
