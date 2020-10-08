import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CONSTANTS from "../../constants";
import { Link } from "gatsby";

import btnand from "../images/DownloadAndroid.png";
import btnwin from "../images/button2.png";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	accessibility: false,
	arrow: false,
};

const { icons } = CONSTANTS;
const data = CONSTANTS.juanChoiceOneLife;

const JuanChoiceOneLife = () => (
	<Layout>
		<SEO title="Juan Choice One Life" />
		<div style={{ flexDirection: "column", display: "flex" }}>
			<br />
			<div style={{ display: "flex" }}>
				<h2 className="textHeader">Juan Choice One Life</h2>
				<Link to="/">
					<img style={{ width: 40, height: 40 }} alt="" src={icons.heartIcon} />
				</Link>
			</div>
			<hr />
			<div className="gameBox">
				<div className="sliderContainer">
					<Slider {...settings} autoplay fade arrows={true}>
						<img src={data.images.pic1} alt="" />
						<img src={data.images.pic2} alt="" />
						<img src={data.images.pic3} alt="" />
						<img src={data.images.pic4} alt="" />
					</Slider>
				</div>
				<div className="availableLogo">
					<img alt="" src={icons.JCOL}></img>
					<div style={{ marginTop: -35, marginLeft: 50, marginBottom: -30 }}>
						<img alt="" style={{ width: 60, height: 60 }} src={icons.winlogo} />
						<img alt="" style={{ width: 60, height: 60 }} src={icons.andlogo} />
					</div>
					<p>
						<span style={{ color: "orange" }}>Version: </span>
						{data.version}
					</p>
					<p>
						<span style={{ color: "orange" }}>Release date: </span>
						{data.date}
					</p>
					<p>
						<span style={{ color: "orange" }}>Genre: </span>
						{data.genre}
					</p>
					<p>
						<span style={{ color: "orange" }}>Device(s): </span>
						{data.devices}
					</p>
				</div>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<div className="linkButtons">
					<a href="https://drive.google.com/open?id=1smED5V1cVofpJXkO_jtUWHo1tmYeW2w2">
						<img alt="" className="downloadButtons" src={btnand}></img>
					</a>
				</div>
				<div className="linkButtons">
					<a href="https://drive.google.com/open?id=1PLFtiPlOqEDGLQPcS39DuwIbhRv1vvbG">
						<img alt="" className="downloadButtons1" src={btnwin}></img>
					</a>
				</div>
			</div>
			<p>{data.desc}</p>
			<h4>How to install:</h4>
			<h5>Installation for Windows:</h5>
			<p>1) Download the game from google drive</p>
			<p>2) Extract all the zip file to a new folder</p>
			<p>3) Enjoy</p>
			<h5>Installation for Android:</h5>
			<p>1) Download the apk from google drive</p>
			<p>2) Install</p>
			<p>3) Enjoy</p>
		</div>
	</Layout>
);

export default JuanChoiceOneLife;
