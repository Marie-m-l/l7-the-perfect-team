import React, { Component } from "react";

const Switch = (props) => (
	<div className="switch-plate">
		<div className="screw" />
		{/* add event listener to switch component & calling on the event handlerpassed down by App component */}
		<div className="switch" onClick={props.toggle}>
			<div className="switch-handle" />
		</div>
		<div className="screw" />
	</div>
);

export default Switch;
