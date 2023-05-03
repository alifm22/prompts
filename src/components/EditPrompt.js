import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPrompt, editPrompt } from "../redux/promptSlice";
import "./Styles.css";
const { v4: uuidv4 } = require("uuid");

const EditPrompt = ({ prompt, setHideForm }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [contributor, setContributor] = useState("");
	const [varified, setVerified] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		setVerified(true);
		if (
			title == prompt.title &&
			text == prompt.text &&
			contributor == prompt.contributor
		)
			return;
		dispatch(
			editPrompt({
				id: prompt.id,
				title: title,
				text: text,
				contributor: contributor,
			})
		);
		setTitle("");
		setText("");
		setHideForm(false);
	};

	useEffect(() => {
		setTitle(prompt.title);
		setText(prompt.text);
		setContributor(prompt.contributor);
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					className={
						varified && contributor == prompt.contributor
							? "emptyField"
							: null
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
					className={
						varified && title == prompt.title ? "emptyField" : null
					}
					type="text"
					placeholder="Set a title for the prompt"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</label>
			<br />
			<label>
				<textarea
					className={
						varified && text == prompt.text ? "emptyField" : null
					}
					placeholder="Enter the exact prompt here..."
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
			</label>
			<br />
			<div className="addPromptBtnContainer">
				<button type="submit">Edit Prompt</button>
			</div>
		</form>
	);
};

export default EditPrompt;
