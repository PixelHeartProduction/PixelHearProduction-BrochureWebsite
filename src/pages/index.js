import React from "react";
import "animate.css/animate.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "gatsby";
import CONSTANTS from "../../constants";
import "../../styles.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import wallpaper from "../images/wallpaper.png";
import Mailer from "../components/mailer";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import OurProjects from "../components/projects";
import Axios from "axios";
import Moment from "moment";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://brochure-api-service.herokuapp.com/api/v1/visitor/visit";
let axiosConfig = {
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};
class IndexPage extends React.Component {
	componentDidMount() {
		if (localStorage.getItem("visitor_id") === null) {
			this.visitorAPI();
		}
	}
	visitorAPI = () => {
		const body = {
			dateTime: Moment()
				.format("YYYY-M-D HH:mm")
				.toString(),
		};
		Axios.post(proxyurl + url, body, axiosConfig).then(res => this.storeData(res.data));
	};
	storeData = data => {
		localStorage.setItem("visitor_id", data.id);
		localStorage.setItem("date", data.dateTime);
	};
	notify = () => toast("Wow so easy !");
	render() {
		const { avatar, icons } = CONSTANTS;
		return (
			<div>
				<Layout>
					<SEO title="Pixel Heart Production" />
					<div>
						<img src={wallpaper} alt="" />
						<div className="headerTextStyle">
							<hr />
							<h1 className="textHeader">
								Changing the world one <span className="pixelText">Pixel</span> at a
								time.
							</h1>
							<hr />
						</div>
						<div>
							<p>
								Hi!, we are the
								<span className="pixelText"> Pixel Heart Production</span> a small
								dev team from Bulacan State University. As you might have expected
								we really love video games and creating them is not an exception. We
								specialize in 2D games and building assets (Graphics, Animations,
								Audio, Scripts/Programs) we also do our own research and screen
								writing and documenting it. To this end, we're doing out best to
								revolutionize 2D gaming with modern technologies and IT knowledge
								one pixel at a time.
							</p>
						</div>
						<div>
							<h2 className="teamTextHeader">Our projects:</h2>
							<OurProjects />
						</div>
						<div>
							<h2 className="teamTextHeader">Downloads:</h2>
							<div>
								<div className="dlContainer">
									<div className="dlImageWrapper">
										<img
											className="availableLogo"
											alt=""
											src={icons.JCOL}
										></img>
									</div>

									<div className="dlInfoWrapper">
										<div className="gamePublicNotice">
											<h4 className="publicNoticeText">
												For Public Testing:
											</h4>
											<img
												src={icons.winlogo}
												alt=""
												className="deviceLogoStyle"
											/>
											<img
												src={icons.andlogo}
												alt=""
												className="deviceLogoStyle"
											/>
										</div>
										<div>
											<Link to="/JuanChoiceOneLife">
												<button className="downloadButton">Download</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
						<h2 className="teamTextHeader">The team:</h2>
					</div>
				</Layout>
				<div className="teamWrapper">
					<ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={3}>
						<div className="teamBackground">
							<div className="teamProfile">
								<img src={avatar.Albert} alt="Albert" className="profPic" />
								<h4 className="nameText">Albert De leon Jr.</h4>
								<p className="roleText">Team Leader/Developer</p>
							</div>
							<div className="teamProfile">
								<img src={avatar.Kim} alt="" className="profPic" />
								<h4 className="nameText">Kim Farley Arellano</h4>
								<p className="roleText">Designer/Developer</p>
							</div>
							<div className="teamProfile">
								<img src={avatar.Justine} alt="" className="profPic" />
								<h4 className="nameText">Justine Allen P. Manuel</h4>
								<p className="roleText">Designer/Documenter</p>
							</div>
							<div className="teamProfile">
								<img src={avatar.Lester} alt="" className="profPic" />
								<h4 className="nameText">Mark Lester Hermano</h4>
								<p className="roleText">Developer</p>
							</div>
						</div>
					</ScrollAnimation>
				</div>

				<div>
					<Layout>
						<hr />
						<h2 className="teamTextHeader">Contact us:</h2>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								flexWrap: "wrap",
							}}
						>
							<div
								style={{
									display: "flex",
									flex: 1,
									flexDirection: "column",
								}}
							>
								<div className="contactContainer">
									<img src={icons.facebook} alt="" className="contactIcons" />
									<p style={{ marginLeft: 7 }}> Coming soon.</p>
								</div>
								<div className="contactContainer">
									<img src={icons.twitter} alt="" className="contactIcons" />
									<p style={{ marginLeft: 7 }}>Coming soon.</p>
								</div>
							</div>
							<div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
								<div className="contactContainer">
									<img src={icons.phone} alt="" className="contactIcons" />
									<p style={{ marginLeft: 7 }}> 0945-351-6391</p>
								</div>
								<div className="contactContainer">
									<img src={icons.gmail} alt="" className="contactIcons" />
									<p style={{ marginLeft: 7 }}>
										PixelHeartProductionGaming@gmail.com
									</p>
								</div>
							</div>
						</div>

						<div>
							<Mailer />
						</div>
					</Layout>
				</div>
			</div>
		);
	}
}

export default IndexPage;
