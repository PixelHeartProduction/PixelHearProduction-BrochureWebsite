import React from "react"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import wallpaper from "../images/wallpaper.png"
import Mailer from "../components/mailer"

import Albert from "../images/Albert.png"
import Kim from "../images/Kim.png"
import Justine from "../images/Justine.png"
import Lester from "../images/Lester.png"

const IndexPage = () => {
  const nameText = {
    color: "orange",
    marginTop: -20,
  }
  const roleText = {
    color: "gray",
    marginTop: -20,
  }
  const headerTextStyle = {
    fontFamily: "Arial",
    alignItems: "center",
    textAlign: "center",
  }
  const pixelText = {
    color: "orange",
  }
  const profPic = {
    maxHeight: 200,
    maxWidth: 200,
  }
  const teamBackground = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
    marginBottom: 25,
  }
  const teamTextHeader = {
    color: "orange",
  }
  const teamProfile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <div>
          <img src={wallpaper} />
          <div style={headerTextStyle}>
            <hr />
            <h1 class="textHeader">
              Changing the world one <span style={pixelText}>Pixel</span> at a
              time.
            </h1>
            <hr />
          </div>
          <div>
            <p>
              Hi!, we are the
              <span style={pixelText}> Pixel Heart Production</span> a small dev
              team from Bulacan State University. As you might have expected we
              really love video games and creating them is not an exception. We
              specialize in 2D games and building assets (Graphics, Animations,
              Audio, Scripts/Programs) we also do our own research and screen
              writing and documenting it. To this end, we're doing out best to
              revolutionize 2D gaming with modern technologies and IT knowledge
              one pixel at a time.
            </p>
          </div>
          <h2 style={teamTextHeader}>The Team:</h2>
        </div>
      </Layout>
      <div style={teamBackground}>
        <div style={teamProfile}>
          <img src={Albert} style={profPic} />
          <h4 style={nameText}>Albert De leon Jr.</h4>
          <p style={roleText}>Team Leader/Developer</p>
        </div>
        <div style={teamProfile}>
          <img src={Kim} style={profPic} />
          <h4 style={nameText}>Kim Farley Arellano</h4>
          <p style={roleText}>Designer/Developer</p>
        </div>
        <div style={teamProfile}>
          <img src={Justine} style={profPic} />
          <h4 style={nameText}>Justine Allen P. Manuel</h4>
          <p style={roleText}>Designer/Documenter</p>
        </div>
        <div style={teamProfile}>
          <img src={Lester} style={profPic} />
          <h4 style={nameText}>Mark Lester Hermano</h4>
          <p style={roleText}>Developer</p>
        </div>
      </div>

      <div>
        <Layout>
          <hr />
          <h2 style={teamTextHeader}>Contact us:</h2>
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

export default IndexPage
