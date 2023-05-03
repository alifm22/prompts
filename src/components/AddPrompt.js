import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrompt } from "../redux/promptSlice";
import "./Styles.css";
const { v4: uuidv4 } = require("uuid");

const AddPrompt = ({ setHideForm }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [contributor, setContributor] = useState("");
	const [varified, setVerified] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		setVerified(true);
		if (title === "" || text === "" || contributor === "") return;
		dispatch(
			addPrompt({
				id: uuidv4(),
				title: title,
				text: text,
				contributor: contributor,
			})
		);
		setTitle("");
		setText("");
		setHideForm(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					className={
						varified && contributor === "" ? "emptyField" : null
					}
					type="text"
					placeholder="Name of the contributor..."
					value={contributor}
					onChange={(event) => setContributor(event.target.value)}
				/>
			</label>
			<br />
			<label>
				<input
					className={varified && title === "" ? "emptyField" : null}
					type="text"
					placeholder="Set a title for the prompt"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</label>
			<br />
			<label>
				<textarea
					className={varified && text === "" ? "emptyField" : null}
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
