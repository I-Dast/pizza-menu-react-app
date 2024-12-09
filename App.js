import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import AddToCart from "./components/AddPizza/AddPizza";

// import './App.css';

function App() {
  const [isShow, setIsShow] = useState(false);
  const showCardHandler = () => {
    setIsShow(true);
  }

  return (
    <div>
        <Header></Header>
        <div className="MainContainer main-container">
            <Menu></Menu>
            <div className="Buttons buttons ">
              <button classclassName="Button Order button order" id="">Commander</button>
            </div>
            <AddToCart />
            <Cart></Cart>
            

        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
