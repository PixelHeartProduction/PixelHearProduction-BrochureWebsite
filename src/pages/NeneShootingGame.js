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
	arrow: false
};

const { icons } = CONSTANTS;
const data = CONSTANTS.Neneshooting;

const NeneShooting = () => (
	<Layout>
		<SEO title="NeneShootingGame" />
		<div style={{ flexDirection: "column", display: "flex" }}>
			<br />
			<div style={{ display: "flex" }}>
				<h2 className="textHeader2">Nene Shooting Game</h2>
				<Link to="/">
					<img
						style={{ width: 40, height: 40 }}
						alt=""
						src={icons.heartIcon}
					/>
				</Link>
			</div>
			<hr />
			<div className="gameBox">
				<div className="sliderContainer">
					<Slider {...settings} autoplay fade arrows={true}>
						<img src={data.images.nene1} alt="" />
						<img src={data.images.nene2} alt="" />
						<img src={data.images.nene3} alt="" />
						<img src={data.images.nene4} alt="" />
					</Slider>
				</div>
				<div className="availableLogo3">
					<img alt="" src={icons.Nene}></img>
					<div
						style={{
							marginTop: -35,
							marginLeft: 90,
							marginBottom: -30
						}}
					>
						<img
							alt=""
							style={{ width: 60, height: 60 }}
							src={icons.winlogo}
						/>
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
					<a href="https://drive.google.com/file/d/1L9SpkVJZb5SxnpC3Jch-WYmS_KtIJF0o/view?usp=sharing">
						<img
							alt=""
							className="downloadButtons1"
							src={btnwin}
						></img>
					</a>
				</div>
			</div>
			<p>{data.desc}</p>
			<h4>How to install:</h4>
			<h5>Installation for Windows:</h5>
			<p>1) Download the game from google drive</p>
			<p>2) Extract all the zip file to a new folder</p>
			<p>3) Enjoy</p>
		</div>
	</Layout>
);

export default NeneShooting;
