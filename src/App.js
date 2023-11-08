//import  "./App.css";
//import Navbar from "./components/Navbar";
//import Main from "./components/Main";
//import Footer from "./components/Footer";

//function App() {
  //return (
    //<div>
      //<Navbar />
      //<Main />
      //<Footer />
      //</div>
  //);
//}
import  "./App.css";
//import Counter from "./Day-3/Counter";
//function App() {
  //return (
    //<div className="flex space-x-4 my-4">
       //<Counter />
    //</div>
  //);
//
//};
import { useState } from "react";
import cart from "./CoffeeShop/cart";
import Menu from "./CoffeeShop/Menu";
import Navbar from "./CoffeeShop/Navbar";
import categories from "./CoffeeShop/product";

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };

  const handleAddTocart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddTocart={handleAddTocart} />
      <cart products={products} />
    </div>
  );
}
export default App;
