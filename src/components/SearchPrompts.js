import React, { useState } from "react";
import { useSelector } from "react-redux";
import Prompt from "./Prompt";
import "./Styles.css";
import AddPrompt from "./AddPrompt";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SearchPrompts = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [showModal, setShowModal] = useState(false);
	const prompts = useSelector((state) => state.prompts);
	const filteredPrompts = prompts.filter(
		(prompt) =>
			JSON.parse(prompt)
				.title.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			JSON.parse(prompt)
				.text.toLowerCase()
				.includes(searchTerm.toLowerCase())
	);

	return (
		<div className="Container">
			<div className="searchBox">
				<h1>"Useful GPT Prompts"</h1>
				<div className="searchBoxContainer">
					{/* <span>Search</span> */}
					<input
						type="text"
						placeholder="Enter keyword(s) to search..."
						value={searchTerm}
						className="searchInput"
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<button onClick={() => setSearchTerm("")}>
						<FontAwesomeIcon icon={faX} />
					</button>
				</div>
			</div>

			<ul className="promptList">
				{filteredPrompts.map((prompt) => (
					<Prompt prompt={JSON.parse(prompt)} />
				))}
			</ul>
			<div className="addContainer">
				<button
					className="addButton"
					onClick={() => setShowModal(true)}
				>
					Add Prompt
				</button>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)} label={"Close"}>
					<AddPrompt setHideForm={setShowModal} />
				</Modal>
			)}
		</div>
	);
};

export default SearchPrompts;
