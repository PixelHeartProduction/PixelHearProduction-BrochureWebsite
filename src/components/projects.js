import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamation } from "@fortawesome/free-solid-svg-icons"

import juan from "../images/1c1l-box.png"
import mithos from "../images/mithos-box.png"
import uncovered from "../images/uncovered-box.png"
import soon from "../images/questionmark.png"

import winlogo from "../images/windowsicon.png"
import andlogo from "../images/androidIcon.png"

import JCOL from "../images/JuanCHoiceLogo.png"

class projects extends React.Component {
  componentDidMount() {}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const gameData = {
      mithos: `The game features an impressive map will be inspired by the pre-colonial era of the Philippines.
       There will be a prominent influence of the Philippine culture present in the game and its storyline.
        The gameplay will be heavily referencing a lot of things native only to the Philippines.
         It will also dabble in mind-boggling mystery and will need the creativity of its players to finish the game.
          Decisions in the game will most likely alter the ending depending on how impactful the choice is.`,
      juan: `
      A simulation game that will present the different ways each scenario
      could end up based on the user’s decisions will be a great help in teaching
      them how to prevent the worst possible outcome. Join Juan's adventure
      of daily choices of his life. Learn how your small
      choices affects your daily life and how it will cause an impact to your future.
      `,
      uncovered: `
      No memories of the past, seemingly helpless, uncovering, discovering.
      Join Taishoo's life upon discovering the mysteries of the present`,
      soon: "Coming soon.",
    }
    const styles = {
      boxPicture: {
        width: 300,
        height: 300,
      },
      gameTitle: {
        color: "orange",
      },
      projectBox: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      },
      textArea: {
        maxWidth: 600,
        marginLeft: 10,
      },
      deviceLogoStyle: {
        width: 50,
        height: 50,
      },
      gamePublicNotice: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      },
      publicNoticeText: {
        marginTop: 13,
      },
      availableLogo: {
        width: 200,
        minWidth: 200,
        height: 100,
      },
    }
    return (
      <div styles={{ display: "flex" }}>
        <Slider {...settings} autoplay fade arrows={true}>
          <div>
            <div style={styles.projectBox}>
              <img src={juan} style={styles.boxPicture} />
              <div style={styles.textArea}>
                <h3 style={styles.gameTitle}>Juan Choice One Life</h3>{" "}
                <div style={styles.gamePublicNotice}>
                  <h4 style={styles.publicNoticeText}>For Public Testing:</h4>
                  <img src={winlogo} style={styles.deviceLogoStyle} />
                  <img src={andlogo} style={styles.deviceLogoStyle} />
                </div>
                <p>{gameData.juan}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={styles.projectBox}>
              <img src={mithos} style={styles.boxPicture} />
              <div style={styles.textArea}>
                <h3 style={styles.gameTitle}>Mithos</h3>
                <p>{gameData.mithos}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={styles.projectBox}>
              <img src={uncovered} style={styles.boxPicture} />
              <div style={styles.textArea}>
                <h3 style={styles.gameTitle}>{`Uncover(ed)`}</h3>
                <p>{gameData.uncovered}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={styles.projectBox}>
              <img src={soon} style={styles.boxPicture} />
              <div style={styles.textArea}>
                <h3 style={styles.gameTitle}></h3>
                <p>{gameData.soon}</p>
              </div>
            </div>
          </div>
        </Slider>
        <br />
      </div>
    )
  }
}

export default projects
