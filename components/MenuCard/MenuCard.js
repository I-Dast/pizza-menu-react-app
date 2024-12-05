import ButtonOrder from "../ButtonAdd/ButtonOrder";
import "./MenuCard.css";

function MenuCard (props){
   return(
    <div className="PizzaCard pizza-card">
            <img src={props.photo} alt="Photo"/>
            <h2>{props.name}</h2>
            <p className="Description description">{props.description}</p>
            <p className="Price price">{props.price}</p>
            <ButtonOrder></ButtonOrder>
    </div> 
        
   );
}
export default MenuCard;