import React, { useState } from "react";

import "./Styles.css";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEdit,
	faCopy,
	faTrash,
	faChevronRight,
	faChevronDown,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deletePrompt, editPrompt } from "../redux/promptSlice";
import EditPrompt from "./EditPrompt";

const Prompt = ({ prompt }) => {
	const [hide, setHide] = useState(true);
	const [showDelModal, setShowDelModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [copied, setCopied] = useState(false);
	const dispatch = useDispatch();

	const handleEdit = () => {
		setShowEditModal(true);
		// dispatch(editPrompt(prompt));
	};

	const handleCopy = () => {
		navigator.clipboard
			.writeText(prompt.text)
			.then(() => {
				setCopied(true);
			})
			.catch((err) => {
				console.error("Could not copy text: ", err);
			});

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const handleDelete = () => {
		dispatch(deletePrompt(prompt));
	};

	return (
		<li key={1} className="listItem">
			<div className="titleContainer" onClick={() => setHide(!hide)}>
				<h3>{prompt.title}</h3>
				{hide ? (
					<FontAwesomeIcon icon={faChevronRight} />
				) : (
					<FontAwesomeIcon icon={faChevronDown} />
				)}
			</div>

			{hide ? null : (
				<div className="promptBodyContainer">
					<span>Contributor: {prompt.contributor}</span>
					<p>{prompt.text}</p>

					<div className="promptActionsContainer">
						<button className="edit" onClick={handleEdit}>
							<FontAwesomeIcon color="orange" icon={faEdit} />
							Edit
						</button>
						<button className="copy" onClick={handleCopy}>
							{copied ? (
								<FontAwesomeIcon color="green" icon={faCheck} />
							) : (
								<FontAwesomeIcon color="green" icon={faCopy} />
							)}
							{copied ? "Copied" : "Copy"}
						</button>
						<button
							className="delete"
							onClick={() => setShowDelModal(true)}
						>
							<FontAwesomeIcon color="red" icon={faTrash} />
							Delete
						</button>
					</div>
				</div>
			)}
			{showDelModal && (
				<Modal onClose={() => setShowDelModal(false)} label={"No"}>
					<div className="deleteModalContainer">
						<h3>Are you sure?</h3>
						<button onClick={handleDelete}>Yes</button>
					</div>
				</Modal>
			)}
			{showEditModal && (
				<Modal onClose={() => setShowEditModal(false)} label={"Cancel"}>
					<EditPrompt
						prompt={prompt}
						setHideForm={setShowEditModal}
					/>
				</Modal>
			)}
		</li>
	);
};

export default Prompt;
