import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/qws/qws-logo.svg"
import Image1 from "../images/work/qws/qws-manual.jpg"
import Image2 from "../images/work/qws/qws-van.jpg"
import Image3 from "../images/work/qws/qws-shirt.jpg"
import Image4 from "../images/work/qws/qws-stationery.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const QWSPage = () => (
  <Layout>
    <SEO title="Quality Water Systems" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Quality Water Systems</h1>

        <p>
        The client was in need of more presence within their town, so a brand identity package was built for their new image. In addition to the artwork, a presentation was created, and all assets were displayed in the form of a booklet.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Quality Water Systems Identity Manual"/>
        </figure>
          
        <figure>
        <img className="img-shadow" src={Image2} alt="Quality Water Systems Van"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Quality Water Systems Shirt"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Quality Water Systems Stationery"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/zeiss/">
            <div className="parent">
              <div className="child bg-zeiss"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/blue-hawk/">
            <div className="parent">
              <div className="child bg-bluehawk"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default QWSPage

export const Head = () => (
  <SEO 
    title="Quality Water Systems" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
