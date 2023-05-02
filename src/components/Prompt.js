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
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deletePrompt, editPrompt } from "../redux/promptSlice";

const Prompt = ({ prompt }) => {
	const [hide, setHide] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();

	const handleEdit = () => {
		dispatch(editPrompt(prompt));
	};

	const handleCopy = () => {};

	const handleDelete = () => {
		dispatch(deletePrompt(prompt));
	};

	return (
		<li key={prompt.id} className="listItem">
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
					<span>Contributor:</span>
					<p>{prompt.text}</p>

					<div className="promptActionsContainer">
						<button className="edit" onClick={handleEdit}>
							<FontAwesomeIcon color="orange" icon={faEdit} />
							Edit
						</button>
						<button className="copy">
							<FontAwesomeIcon color="green" icon={faCopy} />
							Copy
						</button>
						<button className="delete" onClick={handleDelete}>
							<FontAwesomeIcon color="red" icon={faTrash} />
							Delete
						</button>
					</div>
				</div>
			)}
			{showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
		</li>
	);
};

export default Prompt;
