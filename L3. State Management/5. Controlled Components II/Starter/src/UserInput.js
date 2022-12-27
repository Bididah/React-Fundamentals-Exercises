import React from 'react'
import propTypes from 'prop-types'

const UserInput = ({handleSubmit, inputValue, handleChange, addButton, handeleDelete,  deleteButton}) => {
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={inputValue}
          onChange={handleChange}
        />
        <button disabled={addButton()}>Add</button>
      </form>
      <button onClick={handeleDelete} disabled={deleteButton()}>
        Delete Last Item
      </button>
    </div>
  )
}

UserInput.propTypes = {
  handleSubmit : propTypes.func.isRequired,
  inputValue : propTypes.string.isRequired,
  handleChange : propTypes.func.isRequired,
  addButton : propTypes.func.isRequired,
  handeleDelete : propTypes.func.isRequired,
  deleteButton : propTypes.func.isRequired
}


export default UserInput
