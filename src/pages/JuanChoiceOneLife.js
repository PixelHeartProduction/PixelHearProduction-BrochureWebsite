import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGallery from "react-image-gallery"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import pic1 from "../images/JuanChoiceGallery/pic1.jpg"
import pic2 from "../images/JuanChoiceGallery/pic2.jpg"
import pic3 from "../images/JuanChoiceGallery/pic3.jpg"
import pic4 from "../images/JuanChoiceGallery/pic4.jpg"
import { text } from "@fortawesome/fontawesome-svg-core"

import heartIcon from "../images/pixelHeart.png"
import winlogo from "../images/windowsicon.png"
import andlogo from "../images/androidIcon.png"

import JCOL from "../images/JuanCHoiceLogo.png"

import btnand from "../images/DownloadAndroid.png"
import btnwin from "../images/button2.png"

// const Fs = require("fs")
// const Path = require("path")
// const Axios = require("axios")

// async function downloadWindows() {
//   const url =
//     "https://drive.google.com/open?id=1Z8vkOqLr8IpHZyUyWYDXpArL7rS_xtxS"
//   const path = Path.resolve(__dirname, "files", "JuanChoice.zip")

//   const response = Axios({
//     method: "GET",
//     url: url,
//     responseType: "stream",
//   })
//   response.data.pipe(Fs.createWriteStream(path))
//   return new Promise((resolve, reject) => {
//     response.data.on("end", () => {
//       resolve()
//     })

//     response.data.on("error", err => {
//       reject(err)
//     })
//   })
// }

const gameData = {
  desc: `A simulation game that will present the different ways each scenario
  could end up based on the user’s decisions will be a great help in teaching
  them how to prevent the worst possible outcome. Join Juan's adventure
  of daily choices of his life. Learn how your small
  choices affects your daily life and how it will cause an impact to your future.`,
  version: "Pre-alpha 5.0",
  date: "Apr 14, 2020",
  devices: "Windows 7+, Android 5.0+",
  genre: "Visual Novel, Disaster",
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: false,
  arrow: false,
}

const styles = {
  boxPicture: {
    width: 300,
    height: 300,
  },
  textHeader: {
    flex: 1,
    color: "orange",
  },
  gameBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  availableLogo: {
    marginLeft: 650,
    width: 250,
    minWidth: 250,
    height: 150,
    flexDirection: "column",
    display: "flex",
    position: "absolute",
  },
  downloadButtons1: {
    width: 200,
    height: 70,
  },
  downloadButtons: {
    width: 200,
    height: 70,
  },
}

const JuanChoiceOneLife = () => (
  <Layout>
    <SEO title="Juan Choice One Life" />
    <div style={{ flexDirection: "column", display: "flex" }}>
      <br />
      <div style={{ display: "flex" }}>
        <h2 style={styles.textHeader}>Juan Choice One Life</h2>
        <img style={{ width: 40, height: 40 }} src={heartIcon}></img>
      </div>
      <hr />
      <div style={styles.gameBox}>
        <div style={{ width: 600, marginTop: 20 }}>
          <Slider {...settings} autoplay fade arrows={true}>
            <img src={pic1} style={styles.boxPicture} />
            <img src={pic2} style={styles.boxPicture} />
            <img src={pic3} style={styles.boxPicture} />
            <img src={pic4} style={styles.boxPicture} />
          </Slider>
        </div>
        <div style={styles.availableLogo}>
          <img src={JCOL}></img>
          <div style={{ marginTop: -35, marginLeft: 50, marginBottom: -30 }}>
            <img style={{ width: 60, height: 60 }} src={winlogo} />
            <img style={{ width: 60, height: 60 }} src={andlogo} />
          </div>
          <p>
            <span style={{ color: "orange" }}>Version: </span>
            {gameData.version}
          </p>
          <p>
            <span style={{ color: "orange" }}>Release date: </span>
            {gameData.date}
          </p>
          <p>
            <span style={{ color: "orange" }}>Genre: </span>
            {gameData.genre}
          </p>
          <p>
            <span style={{ color: "orange" }}>Device(s): </span>
            {gameData.devices}
          </p>
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a href="https://drive.google.com/open?id=1YfkK8qwIa6G77Zfn0RW2FPGu_Uq6QFt_">
            <img style={styles.downloadButtons} src={btnand}></img>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/open?id=1Z8vkOqLr8IpHZyUyWYDXpArL7rS_xtxS">
            <img style={styles.downloadButtons1} src={btnwin}></img>
          </a>
        </div>
      </div>
      <p style={{ color: "red" }}>
        *NOTE This game is still under delopment bugs are a common issues..
      </p>
      <p>{gameData.desc}</p>
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
)

export default JuanChoiceOneLife
