import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PromptList = () => {
	const prompts = useSelector((state) => state);
	// useEffect(() => {
	// 	console.log(prompts);
	// }, [prompts]);
	return (
		<ul>
			{prompts.map((prompt) => (
				<li key={prompt.id}>
					<h3>{prompt.title}</h3>
					<p>{prompt.text}</p>
					{/* Add buttons for editing and deleting the prompt here */}
				</li>
			))}
		</ul>
	);
};

export default PromptList;
