import "./AddPizza.styled.css";
import {useState} from 'react';



function AddToCart(props) {
   
   const [numero, setNumero] = useState(99);

   function decreaseHandler(){
      setNumero(numero-1)
   }

   function increaseHandler(){
      setNumero(numero+1)
   }

   return (
      <div className="PopinOverlay popin-overlay">
         <button className="Close close" onclick="closePopin">×</button>
         <img src={props.photo}/>
         <h2 className="PopinTitle popin-title">{props.name}</h2>
         <p className="PopinPrice popin-price">{props.price}</p>
         <div className="QuantitySelector">
               <button className="Decrease" onClick={decreaseHandler}>-</button>
               <span>{numero}</span>
               <button className="Increase" onClick={increaseHandler}>+</button>
         </div>
         <button className="ButtonAddToCart">Ajouter au panier</button>
      </div> );
}
export default AddToCart