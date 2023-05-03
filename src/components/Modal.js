import React from "react";
import "./Styles.css";

const Modal = ({ children, onClose, label }) => {
	return (
		<div className="modalOverlay">
			<div className="modalContent">
				{children}
				<button onClick={onClose}>{label}</button>
			</div>
		</div>
	);
};

export default Modal;
