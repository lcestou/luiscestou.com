import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: { eq: "luis-cestou-avatar.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.avatar)
      return (
        <GatsbyImage 
          image={image} 
          alt="Luis Cestou posing for the camera LOL." 
          className="aside__img-wrapper" 
        />
      )
    }}
  />
)

export default Image
