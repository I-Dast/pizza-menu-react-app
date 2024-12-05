import "./Menu.css";
import MenuCard from "../MenuCard/MenuCard";


const pizzas = [
    {
        photo: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&auto=format",
        name: "Regina",
        description: "Tomate, mozzarella, jambon, champignons",
        price: "14.90 €"
    },
    {
        photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format",
        name: "Calzone",
        description: "Tomate, mozzarella, jambon, œuf",
        price: "15.90 €"
    },
    {
        photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format",
        name: "Margherita",
        description: "Tomate, mozzarella, basilic frais",
        price: "12.90 €"
    },
    {
        photo: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format",
        name: "Végétarienne",
        description: "Tomate, légumes grillés, olives",
        price: "13.90 €"
    }
]

const PizzasMenu = pizzas.map(function(pizza){
    console.log(pizza);
    return <MenuCard
        photo={pizza.photo}
        name={pizza.name}
        description={pizza.description}
        price={pizza.price}
    />
    
});

function Menu () {
    return (
        <section className="MenuContainer menu-container">
            {PizzasMenu}
        </section>
    );
}
export default Menu;