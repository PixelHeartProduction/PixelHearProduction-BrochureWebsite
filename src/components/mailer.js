import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Mailer = () => {
  const container = {
    backgroundColor: "teal",
  }
  const text = {
    color: "white",
    marginBottom: 0,
  }
  return (
    <div style={container}>
      <div>
        <p style={text}>Name:</p>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <p style={text}>Email:</p>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <p style={text}>Message:</p>
        <textarea placeholder="Message" />
      </div>
      <input type="button" value="send" />
    </div>
  )
}

export default Mailer
