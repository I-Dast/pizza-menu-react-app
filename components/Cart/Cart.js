import "./Cart.css";

function Cart(){
    return(
        <div className="CartSection cart-section">
            <h2 className="CartTitle cart-title">Votre Panier</h2>
            <span className="CartTotal cart-total">Total :</span>
            <span className="CartSum cart-sum"></span>


        </div>
    );
}
export default Cart;