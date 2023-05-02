import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrompt } from "../redux/promptSlice";
import "./Styles.css";
const { v4: uuidv4 } = require("uuid");

const AddPrompt = ({ setHideForm }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title == "" || text == "") return;
		dispatch(addPrompt({ id: uuidv4(), title: title, text: text }));
		setTitle("");
		setText("");
		setHideForm(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Title:</span>
				<input
					type="text"
					placeholder="Set a title for the prompt"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</label>
			<br />
			<label>
				<span>Body:</span>
				<textarea
					placeholder="Enter the exact prompt here..."
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
			</label>
			<br />
			<div className="addPromptBtnContainer">
				<button type="submit">Add Prompt</button>
			</div>
		</form>
	);
};

export default AddPrompt;
