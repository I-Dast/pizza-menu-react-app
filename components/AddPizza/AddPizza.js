import "./AddPizza.styled.css";
import {useState} from 'react';



function AddToCart(props) {
   
   const [numero, setNumero] = useState(0);

   function decreaseHandler(){
      setNumero(numero-1)
   }

   function increaseHandler(){
      setNumero(numero+1)
   }

   return (
      <div className="">
         <button>×</button>
         <img src={props.photo}/>
         <h2 className="">{props.name}</h2>
         <p className="">{props.price}</p>
         <div className="">
               <button className="Decrease" onClick={decreaseHandler}>-</button>
               <span>{numero}</span>
               <button className="Increase" onClick={increaseHandler}>+</button>
         </div>
         <button className="">Ajouter au panier</button>
      </div> );
}
export default AddToCart