import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
	name: "startSlice",
	initialState: {
		username: "Hello username",
		data: [],
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const fetchUsername = () => {
	// console.log(username);

	return (dispatch) => {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: "Another username" }),
		};
		console.log("are you fetching?");

		fetch("https://wk16-backend.herokuapp.com/start", options)
			.then((response) => response.json())
			.then((json) => dispatch(startSlice.actions.setData(json)));
	};
};

// toggleTodo: (store, action) => {
// 	const updatedItems = store.items.map((item) => {
// 		if (item.id === action.payload) {
// 			const updatedTodo = {
// 				...item,
// 				isComplete: !item.isComplete,
// 			};
// 			return updatedTodo;
// 		} else {
// 			return item;
// 		}
// 	});
// 	store.items = updatedItems;
// },
