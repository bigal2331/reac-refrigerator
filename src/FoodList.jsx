import React from 'react';


const FoodList = (props) => {
	// console.log(`this is props ${JSON.stringify(props)}`)
	let rightNow = new Date();


	return(

		<div className="food-list">
			{props.foodList.map((item) => {
				let exp = new Date(item.exp)
				console.log('this is exp ',exp < rightNow)
				return(
					<p 
						key={item.type}
						className={exp < rightNow ? "expired":"good"}
					>
					{item.type}

					<span id={item.type} className="delete-btn" onClick={(event) => props.handleDelete(event)}>DELETE</span>
					</p>
				)
			})}
		</div>

	)
}

export default FoodList;