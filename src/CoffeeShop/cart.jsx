const cart = ({ products }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold">cart</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
