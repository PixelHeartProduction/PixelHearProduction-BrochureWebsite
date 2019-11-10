import React from "react"
import "animate.css/animate.min.css"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import wallpaper from "../images/wallpaper.png"
import Mailer from "../components/mailer"

import Albert from "../images/Albert.png"
import Kim from "../images/Kim.png"
import Justine from "../images/Justine.png"
import Lester from "../images/Lester.png"

import facebook from "../images/facebook-logo.png"
import twitter from "../images/twitter-social-logotype.png"
import gmail from "../images/gmail.png"
import phone from "../images/smartphone.png"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import OurProjects from "../components/projects"

class IndexPage extends React.Component {
  notify = () => toast("Wow so easy !")
  render() {
    const styles = {
      nameText: { color: "orange", marginTop: -20 },
      roleText: { color: "gray", marginTop: -20 },
      headerTextStyle: {
        fontFamily: "Arial",
        alignItems: "center",
        textAlign: "center",
      },
      pixelText: { color: "orange" },
      profPic: { maxHeight: 200, maxWidth: 200 },
      teamBackground: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
        marginBottom: 25,
      },
      teamTextHeader: {
        color: "orange",
      },
      teamProfile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      contactIcons: {
        width: 25,
        height: 25,
      },
      contactContainer: {
        display: "flex",
        flexDirection: "row",
        minWidth: 250,
      },
      thePixelHeart: {
        width: 100,
        height: 100,
      },
    }
    return (
      <div>
        <Layout>
          <SEO title="Pixel Heart Production" />
          <div>
            <img src={wallpaper} />
            <div style={styles.headerTextStyle}>
              <hr />
              <h1 className="textHeader">
                Changing the world one{" "}
                <span style={styles.pixelText}>Pixel</span> at a time.
              </h1>
              <hr />
            </div>
            <div>
              <p>
                Hi!, we are the
                <span style={styles.pixelText}> Pixel Heart Production</span> a
                small dev team from Bulacan State University. As you might have
                expected we really love video games and creating them is not an
                exception. We specialize in 2D games and building assets
                (Graphics, Animations, Audio, Scripts/Programs) we also do our
                own research and screen writing and documenting it. To this end,
                we're doing out best to revolutionize 2D gaming with modern
                technologies and IT knowledge one pixel at a time.
              </p>
            </div>
            <div>
              <h2 style={styles.teamTextHeader}>Our projects:</h2>
              <OurProjects />
            </div>
            <br />
            <h2 style={styles.teamTextHeader}>The team:</h2>
          </div>
        </Layout>
        <ScrollAnimation
          animateIn="fadeIn"
          initiallyVisible={true}
          duration={3}
        >
          <div style={styles.teamBackground}>
            <div style={styles.teamProfile}>
              <img src={Albert} style={styles.profPic} />
              <h4 style={styles.nameText}>Albert De leon Jr.</h4>
              <p style={styles.roleText}>Team Leader/Developer</p>
            </div>
            <div style={styles.teamProfile}>
              <img src={Kim} style={styles.profPic} />
              <h4 style={styles.nameText}>Kim Farley Arellano</h4>
              <p style={styles.roleText}>Designer/Developer</p>
            </div>
            <div style={styles.teamProfile}>
              <img src={Justine} style={styles.profPic} />
              <h4 style={styles.nameText}>Justine Allen P. Manuel</h4>
              <p style={styles.roleText}>Designer/Documenter</p>
            </div>
            <div style={styles.teamProfile}>
              <img src={Lester} style={styles.profPic} />
              <h4 style={styles.nameText}>Mark Lester Hermano</h4>
              <p style={styles.roleText}>Developer</p>
            </div>
          </div>
        </ScrollAnimation>

        <div>
          <Layout>
            <hr />
            <h2 style={styles.teamTextHeader}>Contact us:</h2>
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
                <div style={styles.contactContainer}>
                  <img src={facebook} style={styles.contactIcons} />
                  <p style={{ marginLeft: 7 }}> Coming soon.</p>
                </div>
                <div style={styles.contactContainer}>
                  <img src={twitter} style={styles.contactIcons} />
                  <p style={{ marginLeft: 7 }}>Coming soon.</p>
                </div>
              </div>
              <div
                style={{ display: "flex", flex: 1, flexDirection: "column" }}
              >
                <div style={styles.contactContainer}>
                  <img src={phone} style={styles.contactIcons} />
                  <p style={{ marginLeft: 7 }}> 0945-351-6391</p>
                </div>
                <div style={styles.contactContainer}>
                  <img src={gmail} style={styles.contactIcons} />
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
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default IndexPage
