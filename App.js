import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";


// import './App.css';

function App() {
  return (
    <div>
        <Header></Header>
        <div className="MainContainer main-container">
            <Menu></Menu>
            <Cart></Cart>
            

        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
