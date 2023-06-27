import {pizzaData} from "../../utils/data";
import './pizzaMenu.css'

const PizzaMenu = () => {
    const pizzaItem = pizzaData;
    // const pizza = []
    const totalPizza = pizzaItem.length;
    // Check if the pizza is sold out
    // const notSoldPizza = pizzaItem.filter(pizza => !pizza.soldOut);
    return (
        <main className="menu">
            <h2> Our Menu</h2>
            {totalPizza > 0 ?
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
                        organic,
                        all delicious.</p>
                    <ul className="pizzas">
                        {pizzaItem.map(pizza => {
                            return (
                                <div className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`} key={pizza.id}>
                                    <img src={pizza.photoName} alt="pizza"/>
                                    <div>
                                        <h3>{pizza.name}</h3>
                                        <p>{pizza.ingredients}</p>
                                        <span>{pizza.soldOut ? 'SOLD OUT ' : `Price $ ${pizza.price}`}</span>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </ul>
                </>
                : <p>We're still working on menu. PLease come back later :)</p>}
        </main>
    )
}

export default PizzaMenu
