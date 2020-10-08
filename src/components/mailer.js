import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";

class Mailer extends React.Component {
	notifyB = message =>
		toast(message, {
			containerId: "B",
		});

	state = {
		name: "",
		email: "",
		title: "",
		message: "",
		date: "",
		isDisabled: false,
	};
	componentDidMount() {
		const today = new Date();
		let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
		this.setState({ date: date });
	}
	handleSubmit = () => {
		const { name, email, message, title } = this.state;
		const successStyle = {
			display: "flex",
			flexDirection: "row",
			marginBottom: -20,
		};
		const messageStyle = {
			marginLeft: 15,
		};
		if (name !== "" && email !== "" && message !== "" && title !== "") {
			this.notifyB(
				<div style={successStyle}>
					<FontAwesomeIcon icon={faCheck} color="green" />
					<h4 style={messageStyle}> Your message was sent!</h4>
				</div>
			);
			this.clearTextInputs("PixelHeartProduction");
		} else {
			this.notifyB(
				<div style={successStyle}>
					<FontAwesomeIcon icon={faExclamation} color="orange" />
					<h4 style={messageStyle}> Fill all fields!!</h4>
				</div>
			);
		}
	};
	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className="container">
				<ToastContainer
					enableMultiContainer
					containerId={"B"}
					position={toast.POSITION.TOP_RIGHT}
					autoClose={3000}
					hideProgressBar={true}
				/>
				<form>
					<div className="twoColumn">
						<div className="sd3f3">
							<p className="text">Name:</p>
							<input
								className="textInput"
								type="text"
								placeholder="Name"
								name="name"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="sd3f3r">
							<p className="text">Email:</p>
							<input
								className="textInput"
								type="text"
								placeholder="Email"
								name="email"
								onChange={this.handleInputChange}
							/>
						</div>
					</div>

					<div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
						<p className="text">Title:</p>
						<input
							className="textInput"
							type="text"
							placeholder="Title"
							name="title"
							onChange={this.handleInputChange}
						/>
					</div>
					<div>
						<p className="text">Message:</p>
						<textarea
							height={220}
							className="textInputLong"
							placeholder="Message"
							name="message"
							onChange={this.handleInputChange}
						/>
					</div>
					<input
						className="button"
						type="button"
						disabled={this.state.isDisabled}
						value="Send"
						onClick={() => {
							this.handleSubmit();
						}}
					/>
				</form>
			</div>
		);
	}
}

export default Mailer;
