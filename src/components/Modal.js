import React from "react";
import "./Styles.css";

const Modal = ({ children, onClose }) => {
	return (
		<div className="modalOverlay">
			<div className="modalContent">
				{children}
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
