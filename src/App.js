import React from 'react'
import PizzaHeader from "./Components/Header/PizzaHeader";
import PizzaMenu from "./Components/Menu/PizzaMenu";
import PizzaFooter from "./Components/Footer/PizzaFooter";
import './App.css'
const App = () => {
  return (
    <div className="container">
        <PizzaHeader/>
        <PizzaMenu/>
        <PizzaFooter />
    </div>
  )
}

export default App
