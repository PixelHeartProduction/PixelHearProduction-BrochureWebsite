import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://brochure-api-service.herokuapp.com/api/v1/message/send";
let axiosConfig = {
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

class Mailer extends React.PureComponent {
	notifyB = message =>
		toast(message, {
			containerId: "B",
		});

	state = {
		name: "",
		email: "",
		title: "",
		message: "",
	};
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
			const body = {
				name: this.state.name,
				email: this.state.email,
				title: this.state.title,
				message: this.state.message,
				date: Moment()
					.format("YYYY-M-D")
					.toString(),
			};
			axios.post(proxyurl + url, body, axiosConfig);
			this.clearFields();
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
	clearFields = () => {
		this.setState({ name: "", email: "", title: "", message: "" });
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
								value={this.state.name}
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
								value={this.state.email}
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
							value={this.state.title}
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
							value={this.state.message}
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
