import './pizzaFooter.css';
import PizzaOrder from "./Order/pizzaOrder";
import React from "react";

const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
const PizzaFooter = () => {

    return (
        <div>
            <footer> {isOpen ? <PizzaOrder closeHour={closeHour}/> : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p> } </footer>
        </div>
    )
}

export default PizzaFooter
