import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const promptsSlice = createSlice({
	name: "prompts",
	initialState,
	reducers: {
		addPrompt: (state, action) => {
			state.push(
				JSON.stringify({
					id: action.payload.id,
					title: action.payload.title,
					text: action.payload.text,
				})
			);
		},
		editPrompt: (state, action) => {
			const idx = state.findIndex(
				(obj) => JSON.parse(obj).id == action.payload.id
			);
			state[idx] = JSON.stringify({
				id: state[idx],
				title: "This is edited title!",
				text: "Who has time for long text placeholder?!!!! Who has time for long text placeholder?!!!! Who has time for long text placeholder?!!!! Who has time for long text placeholder?!!!! Who has time for long text placeholder?!!!!",
			});
			console.log(state[idx]);
			// Add code to handle editing a prompt here
		},
		deletePrompt: (state, action) => {
			// console.log(action.payload);
			return state.filter(
				(prompt) => JSON.parse(prompt).id != action.payload.id
			);

			// console.log(state);
			// Add code to handle deleting a prompt here
		},
	},
});

export const { addPrompt, editPrompt, deletePrompt } = promptsSlice.actions;
export default promptsSlice.reducer;
