import React from 'react'


const AddFoodForm = (props) => {

	return (
		<div className="food-form">
			<input type="text" value={props.foodValues.type} className="food-entry" name="type" onChange={(event) => props.handleChange(event)} />
			<input type="date" value={props.foodValues.exp} className="calendar" name="exp" onChange={(event) => props.handleChange(event)} />
			<span id="add" onClick={props.addItem}>ADD</span>
		</div>
	)
}

export default AddFoodForm;