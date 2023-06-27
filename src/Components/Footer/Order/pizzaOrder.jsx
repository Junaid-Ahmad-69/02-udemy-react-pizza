import React from 'react'

const pizzaOrder = ({closeHour}) => {
  return (
    <div>
        <div className="order">
            <p>We're open until {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    </div>
  )
}

export default pizzaOrder
