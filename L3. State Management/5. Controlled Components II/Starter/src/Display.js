import React from 'react'


const Display = ({itemsArray}) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {itemsArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Display
